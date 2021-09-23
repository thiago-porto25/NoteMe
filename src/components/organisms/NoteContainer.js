import { useState, useContext } from "react"
import styled from "styled-components"
import { NoteInput } from "../atoms"
import { NoteSave, NoteTitle, NoNoteSelected } from "../molecules"
import NotesContext from "../../context/notesContext"

const NoteContainerContainer = styled.div`
  height: calc(100% - 52.5px);

  .note-input-container {
    height: 80%;
  }

  .note-buttons-container {
    height: calc(10% - 4px);
    margin-top: 4px;
    display: flex;
    justify-content: right;
    align-items: center;
  }
`

export default function NoteContainer() {
  const { currentNote, setNotification, setCurrentNote } =
    useContext(NotesContext)

  const [noteValue, setNoteValue] = useState("")
  const [titleValue, setTitleValue] = useState("")
  const [loading, setLoading] = useState(false)

  return currentNote ? (
    <NoteContainerContainer>
      <div>
        <NoteTitle
          titleValue={titleValue}
          setTitleValue={setTitleValue}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          setNotification={setNotification}
        />
      </div>
      <div className="note-input-container">
        <NoteInput
          currentNote={currentNote}
          noteValue={noteValue}
          setNoteValue={setNoteValue}
        />
      </div>
      <div className="note-buttons-container">
        <NoteSave
          setNotification={setNotification}
          loading={loading}
          setLoading={setLoading}
          noteValue={noteValue}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
        />
      </div>
    </NoteContainerContainer>
  ) : (
    <NoNoteSelected />
  )
}
