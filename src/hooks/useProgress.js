import { useCallback, useMemo } from 'react'
import { useAuth } from '../contexts/AuthContext'
import {
  markProblemSolved as markProblemSolvedDoc,
  markTopicRead as markTopicReadDoc,
  saveQuizScore as saveQuizScoreDoc,
} from '../firebase/progress'

export function useProgress() {
  const { currentUser, userData, refreshUserData } = useAuth()
  const uid = currentUser?.uid
  const isLoggedIn = Boolean(uid)

  const markTopicRead = useCallback(
    async (topicId) => {
      if (!uid) return
      await markTopicReadDoc(uid, topicId)
      await refreshUserData()
    },
    [uid, refreshUserData],
  )

  const saveQuizScore = useCallback(
    async (topicId, score, total) => {
      if (!uid) return
      await saveQuizScoreDoc(uid, topicId, score, total)
      await refreshUserData()
    },
    [uid, refreshUserData],
  )

  const markProblemSolved = useCallback(
    async (problemId) => {
      if (!uid) return
      await markProblemSolvedDoc(uid, problemId)
      await refreshUserData()
    },
    [uid, refreshUserData],
  )

  const isTopicRead = useCallback(
    (topicId) => Boolean(userData?.progress?.topicsRead?.includes(topicId)),
    [userData],
  )

  const getQuizScore = useCallback(
    (topicId) => userData?.progress?.quizScores?.[topicId] ?? null,
    [userData],
  )

  const isProblemSolved = useCallback(
    (problemId) => Boolean(userData?.progress?.problemsSolved?.includes(problemId)),
    [userData],
  )

  return useMemo(
    () => ({
      markTopicRead,
      saveQuizScore,
      markProblemSolved,
      isTopicRead,
      getQuizScore,
      isProblemSolved,
      isLoggedIn,
    }),
    [
      markTopicRead,
      saveQuizScore,
      markProblemSolved,
      isTopicRead,
      getQuizScore,
      isProblemSolved,
      isLoggedIn,
    ],
  )
}
