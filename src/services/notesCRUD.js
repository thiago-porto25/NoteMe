import {
  auth,
  db,
  collection,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  serverTimestamp,
  doc,
  onSnapshot,
  query,
  where,
  deleteDoc
} from "../firebase/config"
import { v4 as uuid } from "uuid"

////Create Note
export const createNoteWithFirebase = async ({ setError }) => {
  try {
    const randomId = uuid()

    const defaultNote = {
      id: randomId,
      authorId: auth.currentUser.uid,
      title: "Untitled",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }

    await setDoc(doc(db, "notes", randomId), defaultNote)
  } catch (error) {
    setError(error)
  }
}

////Update Note
export const setNoteTitleWithFirebase = async ({
  inputValue,
  currentNote,
  setError
}) => {
  try {
    const noteRef = doc(db, "notes", currentNote.id)
    await setDoc(
      noteRef,
      { title: inputValue, updatedAt: serverTimestamp() },
      { merge: true }
    )
  } catch (error) {
    setError(error)
  }
}

////Delete Note
export const deleteNoteWithFirebase = async ({ currentNote, setError }) => {
  try {
    const noteRef = doc(db, "notes", currentNote.id)

    await deleteDoc(noteRef)
  } catch (error) {
    setError(error)
  }
}
