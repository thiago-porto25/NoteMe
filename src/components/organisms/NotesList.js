import { useContext } from "react"
import styled from "styled-components"
import { NotesListEmpty } from "../atoms"
import { NotesListItem } from "../molecules"
import NotesContext from "../../context/notesContext"

const NotesListContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: var(--aboveBg);
  height: calc(100% - 52.5px);

  &::-webkit-scrollbar {
    display: none;
  }
`

export default function NotesList({ setMobileBarOpen, mobileBarOpen }) {
  const { userNotes, setCurrentNote, currentNote } = useContext(NotesContext)

  return (
    <NotesListContainer>
      {userNotes.length > 0 ? (
        userNotes.map((note, i) => (
          <NotesListItem
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            note={note}
            key={`${note}-${i}`}
            mobileBarOpen={mobileBarOpen}
            setMobileBarOpen={setMobileBarOpen}
          />
        ))
      ) : (
        <NotesListEmpty />
      )}
    </NotesListContainer>
  )
}
