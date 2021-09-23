import styled from "styled-components"
import { IconStyle } from "../bosons"
import { UserDropdownToggle } from "../atoms"
import { InfoDropdown, UserDropdown } from "../molecules"
import { useContext, useState } from "react"
import UserContext from "../../context/userContext"
import { FiTrash2, FiMenu } from "react-icons/fi"
import { AiOutlineInfoCircle } from "react-icons/ai"
import NotesContext from "../../context/notesContext"
import { deleteNoteWithFirebase } from "../../services/notesCRUD"

const NoteHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #888;
  position: relative;
  background-color: var(--aboveBg);

  .note-header-icons-container {
    display: flex;
    gap: 20px;
    padding: 0px 20px;

    .menu-icon {
      display: none;

      @media (max-width: 620px) {
        display: block;
      }

      &:hover {
        color: var(--primaryClear);
      }
    }

    .note-header-icon {
      svg {
        width: 25px;
        height: 25px;
        margin-top: 3px;

        &:hover {
          color: var(--primaryClear);
        }
      }
    }
  }

  .note-header-user-dropdown-container {
    padding-top: 1px;
    padding-right: 20px;
    position: relative;
  }
`

export default function NoteHeader({ setMobileBarOpen }) {
  const { currentNote, setCurrentNote, setNotification } =
    useContext(NotesContext)

  const [dropdownUser, setDropdownUser] = useState(false)
  const [dropdownInfo, setDropdownInfo] = useState(false)

  const user = useContext(UserContext)

  const handleDelete = () => {
    setCurrentNote(null)
    deleteNoteWithFirebase({ currentNote, setNotification })
  }

  return (
    <NoteHeaderContainer>
      <div className="note-header-icons-container">
        <IconStyle>
          <FiMenu
            className="menu-icon"
            onClick={() => setMobileBarOpen((prev) => !prev)}
          />
        </IconStyle>

        {currentNote && (
          <>
            <div onClick={handleDelete} className="note-header-icon">
              <IconStyle>
                <FiTrash2 />
              </IconStyle>
            </div>

            <div
              onClick={() => setDropdownInfo((prev) => !prev)}
              className="note-header-icon"
            >
              <IconStyle>
                <AiOutlineInfoCircle />
              </IconStyle>
            </div>
          </>
        )}

        {dropdownInfo && (
          <InfoDropdown
            setDropdownInfo={setDropdownInfo}
            data={{
              createdAt: currentNote.createdAt,
              updatedAt: currentNote.updatedAt
            }}
          />
        )}
      </div>

      <div
        onClick={() => setDropdownUser((prev) => !prev)}
        className="note-header-user-dropdown-container"
      >
        <UserDropdownToggle isDropdownOpen={dropdownUser}>
          {user.email}
        </UserDropdownToggle>

        {dropdownUser && <UserDropdown setDropdownUser={setDropdownUser} />}
      </div>
    </NoteHeaderContainer>
  )
}
