import { getAuth } from 'firebase/auth'
import { app } from './config'

export const auth = getAuth(app)

export async function loginWithEmail(email, password) {
  // TODO: Implement email login in Phase 4.
}

export async function registerWithEmail(email, password) {
  // TODO: Implement email registration in Phase 4.
}

export async function logout() {
  // TODO: Implement logout in Phase 4.
}
