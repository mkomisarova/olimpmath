import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { db } from './config'

export async function getAllTopics() {
  const topicsRef = collection(db, 'topics')
  const topicsQuery = query(topicsRef, orderBy('order', 'asc'))
  const snapshot = await getDocs(topicsQuery)

  return snapshot.docs.map((topicDoc) => ({
    id: topicDoc.id,
    ...topicDoc.data(),
  }))
}

export async function getTopicBySlug(slug) {
  const topicsRef = collection(db, 'topics')
  const topicQuery = query(topicsRef, where('slug', '==', slug), limit(1))
  const snapshot = await getDocs(topicQuery)

  if (snapshot.empty) {
    return null
  }

  const topicDoc = snapshot.docs[0]
  return {
    id: topicDoc.id,
    ...topicDoc.data(),
  }
}

export async function getTopicProblems(topicId) {
  const problemsRef = collection(doc(db, 'topics', topicId), 'problems')
  const snapshot = await getDocs(problemsRef)

  return snapshot.docs.map((problemDoc) => ({
    id: problemDoc.id,
    ...problemDoc.data(),
  }))
}

export async function getTopicQuiz(topicId) {
  const quizRef = collection(doc(db, 'topics', topicId), 'quizQuestions')
  const snapshot = await getDocs(quizRef)

  return snapshot.docs.map((quizDoc) => ({
    id: quizDoc.id,
    ...quizDoc.data(),
  }))
}
