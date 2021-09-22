import { useState, useContext } from "react"
import styled from "styled-components"
import { NoteInput } from "../atoms"
import { NoteSave, NoteTitle, NoNoteSelected } from "../molecules"
import NotesContext from "../../context/notesContext"

const NoteContainerContainer = styled.div``

export default function NoteContainer() {
  const { currentNote, setCurrentNote } = useContext(NotesContext)

  const [loading, setLoading] = useState(false)

  return currentNote ? (
    <NoteContainerContainer>
      <div>
        <NoteTitle>{currentNote.title}</NoteTitle>
      </div>
      <div>
        <NoteInput />
      </div>
      <div>
        <NoteSave loading={loading} />
      </div>
    </NoteContainerContainer>
  ) : (
    <NoNoteSelected />
  )
}
