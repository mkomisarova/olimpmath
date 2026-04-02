import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from './config'

export async function markTopicRead(uid, topicId) {
  const userRef = doc(db, 'users', uid)
  await updateDoc(userRef, {
    'progress.topicsRead': arrayUnion(topicId),
  })
}

export async function saveQuizScore(uid, topicId, score, total) {
  const userRef = doc(db, 'users', uid)
  const snap = await getDoc(userRef)
  if (!snap.exists) {
    return
  }
  const existing = snap.data()?.progress?.quizScores?.[topicId]
  if (existing && typeof existing.score === 'number' && existing.score >= score) {
    return
  }

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0
  await updateDoc(userRef, {
    [`progress.quizScores.${topicId}`]: { score, total, percentage },
  })
}

export async function markProblemSolved(uid, problemId) {
  const userRef = doc(db, 'users', uid)
  await updateDoc(userRef, {
    'progress.problemsSolved': arrayUnion(problemId),
  })
}
