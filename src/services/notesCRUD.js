import {
  auth,
  db,
  setDoc,
  serverTimestamp,
  doc,
  deleteDoc
} from "../firebase/config"
import { v4 as uuid } from "uuid"
import faker from "faker"

//////////////Create Note
export const createNoteWithFirebase = async ({ setError }) => {
  try {
    const randomId = uuid()

    const defaultNote = {
      id: randomId,
      authorId: auth.currentUser.uid,
      title: "New Note",
      content: faker.lorem.sentences(2),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }

    await setDoc(doc(db, "notes", randomId), defaultNote)
  } catch (error) {
    setError(error)
  }
}

//////////////Update Note Title
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

//////////////Delete Note
export const deleteNoteWithFirebase = async ({ currentNote, setError }) => {
  try {
    const noteRef = doc(db, "notes", currentNote.id)

    await deleteDoc(noteRef)
  } catch (error) {
    setError(error)
  }
}

//////////////Update Note Content
export const setNoteContentWithFirebase = async ({
  noteValue,
  currentNote,
  setError
}) => {
  try {
    const noteRef = doc(db, "notes", currentNote.id)

    await setDoc(noteRef, { content: noteValue }, { merge: true })
  } catch (error) {
    setError(error.message)
  }
}
