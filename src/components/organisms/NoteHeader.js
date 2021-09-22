import styled from "styled-components"
import { IconStyle } from "../bosons"
import { UserDropdownToggle } from "../atoms"
import { InfoDropdown, UserDropdown } from "../molecules"
import { useContext, useState } from "react"
import UserContext from "../../context/userContext"
import { FiTrash2 } from "react-icons/fi"
import { AiOutlineInfoCircle } from "react-icons/ai"
import NotesContext from "../../context/notesContext"

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
    padding: 10px 20px;

    .note-header-icon {
      svg {
        width: 25px;
        height: 25px;

        &:hover {
          color: var(--primaryClear);
        }
      }
    }
  }

  .note-header-user-dropdown-container {
    padding-right: 20px;
    position: relative;
  }
`

export default function NoteHeader() {
  const { currentNote, setCurrentNote } = useContext(NotesContext)

  const [dropdownUser, setDropdownUser] = useState(false)
  const [dropdownInfo, setDropdownInfo] = useState(false)

  const user = useContext(UserContext)

  const handleDelete = () => {
    setCurrentNote(null)
    //destroy document in firebase
  }

  return (
    <NoteHeaderContainer>
      <div className="note-header-icons-container">
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

        {dropdownUser && <UserDropdown />}
      </div>
    </NoteHeaderContainer>
  )
}
