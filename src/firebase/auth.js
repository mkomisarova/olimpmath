import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { app, db } from './config'

export const auth = getAuth(app)

export async function registerUser(username, email, password) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    username,
    email,
    createdAt: new Date().toISOString(),
    progress: {
      topicsRead: [],
      quizScores: {},
      problemsSolved: [],
    },
  })
  return user
}

export async function loginUser(email, password) {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  return user
}

export async function logoutUser() {
  await signOut(auth)
}

export async function getUserData(uid) {
  const snap = await getDoc(doc(db, 'users', uid))
  if (!snap.exists) {
    return null
  }
  return snap.data()
}
