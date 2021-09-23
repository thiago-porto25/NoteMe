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
export const createNoteWithFirebase = async ({ setNotification }) => {
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
    setNotification({ type: "error", text: error.message })
  }
}

//////////////Update Note Title
export const setNoteTitleWithFirebase = async ({
  titleValue,
  currentNote,
  setNotification
}) => {
  try {
    const noteRef = doc(db, "notes", currentNote.id)
    await setDoc(
      noteRef,
      { title: titleValue, updatedAt: serverTimestamp() },
      { merge: true }
    )
  } catch (error) {
    setNotification({ type: "error", text: error.message })
  }
}

//////////////Delete Note
export const deleteNoteWithFirebase = async ({
  currentNote,
  setNotification
}) => {
  try {
    const noteRef = doc(db, "notes", currentNote.id)

    await deleteDoc(noteRef)
  } catch (error) {
    setNotification({ type: "error", text: error.message })
  }
}

//////////////Update Note Content
export const setNoteContentWithFirebase = async ({
  noteValue,
  currentNote,
  setNotification
}) => {
  try {
    const noteRef = doc(db, "notes", currentNote.id)

    await setDoc(noteRef, { content: noteValue }, { merge: true })
  } catch (error) {
    setNotification({ type: "error", text: error.message })
  }
}
