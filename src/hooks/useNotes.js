/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react"
import FirebaseContext from "../context/firebaseContext"

export default function useNotes({ uid = "" }) {
  const [userNotes, setUserNotes] = useState([])
  const { db, onSnapshot, collection, query, where, orderBy } =
    useContext(FirebaseContext)

  useEffect(() => {
    let cleanup

    const listenForNotes = async () => {
      const notesRef = await collection(db, "notes")

      const q = await query(
        notesRef,
        where("authorId", "==", uid),
        orderBy("createdAt", "asc")
      )

      const unsub = await onSnapshot(q, (querySnapshot) => {
        setUserNotes([])
        querySnapshot.forEach((doc) =>
          setUserNotes((prev) => {
            return [...prev, doc.data()]
          })
        )
      })

      return unsub
    }

    const setCleanup = async () => {
      cleanup = await listenForNotes()
    }

    if (uid) setCleanup()

    return () => {
      cleanup()
    }
  }, [])

  return { userNotes }
}
