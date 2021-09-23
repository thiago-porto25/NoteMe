import styled from "styled-components"
import { IconStyle } from "../bosons"
import { FiPlus } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { useContext } from "react"
import NotesContext from "../../context/notesContext"
import { createNoteWithFirebase } from "../../services/notesCRUD"

const SidebarHeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--aboveBg);

  .add-icon,
  .close-icon {
    margin: 7.5px 20px;
    transition: 300ms ease-in-out;

    &:hover {
      transform: rotate(-180deg);
      color: var(--primaryClear);
    }
  }

  .close-icon {
    display: none;

    @media (max-width: 620px) {
      display: block;
    }
  }
`

export default function SidebarHeader({ mobileBarOpen, setMobileBarOpen }) {
  const { setNotification, userNotes } = useContext(NotesContext)

  const handleAdd = async () => {
    if (userNotes.length >= 8) {
      setNotification({
        type: "error",
        text: "You have reached the maximum number of Notes!"
      })
      return
    }

    await createNoteWithFirebase({ setNotification })
  }

  return (
    <SidebarHeaderContainer>
      <IconStyle>
        {mobileBarOpen && (
          <MdClose
            className="close-icon"
            onClick={() => setMobileBarOpen((prev) => !prev)}
          />
        )}
      </IconStyle>
      <IconStyle>
        <FiPlus className="add-icon" onClick={handleAdd} />
      </IconStyle>
    </SidebarHeaderContainer>
  )
}
