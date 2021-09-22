/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react"
import FirebaseContext from "../context/firebaseContext"

export default function useAuthListener() {
  const [user, setUser] = useState(null)
  const { onAuthStateChanged, auth } = useContext(FirebaseContext)

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
  }, [])

  return { user }
}
