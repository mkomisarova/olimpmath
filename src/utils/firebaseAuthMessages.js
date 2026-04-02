/** Map Firebase Auth error codes to Latvian messages for login/register UI. */
export function getLoginErrorMessage(error) {
  const code = error?.code
  if (
    code === 'auth/user-not-found' ||
    code === 'auth/wrong-password' ||
    code === 'auth/invalid-credential'
  ) {
    return 'Nepareizs e-pasts vai parole'
  }
  if (code === 'auth/too-many-requests') {
    return 'Pārāk daudz mēģinājumu. Mēģini vēlāk.'
  }
  return 'Radās kļūda. Mēģini vēlreiz.'
}

export function getRegisterErrorMessage(error) {
  const code = error?.code
  if (code === 'auth/email-already-in-use') {
    return 'Šis e-pasts jau ir reģistrēts'
  }
  if (
    code === 'auth/user-not-found' ||
    code === 'auth/wrong-password' ||
    code === 'auth/invalid-credential'
  ) {
    return 'Nepareizs e-pasts vai parole'
  }
  if (code === 'auth/too-many-requests') {
    return 'Pārāk daudz mēģinājumu. Mēģini vēlāk.'
  }
  return 'Radās kļūda. Mēģini vēlreiz.'
}
