import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  db,
  doc,
  setDoc,
  sendEmailVerification,
  sendPasswordResetEmail
} from "../firebase/config"

//Login
export const loginWithFirebase = async ({
  email,
  password,
  setError,
  setEmail,
  setPassword,
  setLoading
}) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    setLoading(false)
    setEmail("")
    setPassword("")
    setError(error.message)
  }
}

//Logout
export const logoutWithFirebase = async ({ setNotification }) => {
  try {
    await signOut(auth)
  } catch (error) {
    setNotification({ type: "error", text: error.message })
  }
}

//Signup
export const createUserWithFirebase = async ({
  email,
  password,
  name,
  setError
}) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await sendEmailVerification(user)

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      email,
      name
    })
  } catch (error) {
    setError(error.message)
  }
}

//Reset password
export const sendResetPasswordWithFirebase = async ({
  email,
  setError,
  setSuccess
}) => {
  try {
    await sendPasswordResetEmail(auth, email)
    setSuccess("The password reset link was sent. Check your e-mail!")
  } catch (error) {
    setError(error.message)
  }
}
