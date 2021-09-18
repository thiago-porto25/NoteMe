import { useState, useEffect, useContext } from "react"
import FirebaseContext from "../context/firebaseContext"

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")))
  const { onAuthStateChanged, auth } = useContext(FirebaseContext)

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser))
        setUser(authUser)
      } else {
        localStorage.removeItem("authUser")
        setUser(null)
      }
    })

    return () => listener()
  }, [onAuthStateChanged, auth])

  return { user }
}
