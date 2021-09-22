import styled from "styled-components"
import { IconStyle } from "../bosons"
import { FiPlus } from "react-icons/fi"
import { useContext } from "react"
import NotesContext from "../../context/notesContext"
import { createNoteWithFirebase } from "../../services/notesCRUD"

const SidebarHeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--aboveBg);

  .add-icon {
    margin: 7.5px 20px;
    transition: 300ms ease-in-out;

    &:hover {
      transform: rotate(-180deg);
      color: var(--primaryClear);
    }
  }
`

export default function SidebarHeader() {
  const { setError, userNotes } = useContext(NotesContext)

  const handleAdd = async () => {
    if (userNotes.length >= 8) {
      setError("You have reached the maximum number of Notes!")
      return
    }

    await createNoteWithFirebase({ setError })
  }

  return (
    <SidebarHeaderContainer>
      <IconStyle>
        <FiPlus className="add-icon" onClick={handleAdd} />
      </IconStyle>
    </SidebarHeaderContainer>
  )
}
