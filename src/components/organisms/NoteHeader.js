import styled from "styled-components"
import { IconStyle } from "../bosons"
import { UserDropdownToggle } from "../atoms"
import { InfoDropdown, UserDropdown } from "../molecules"
import { useContext, useState } from "react"
import UserContext from "../../context/userContext"

const NoteHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function NoteHeader() {
  const [dropdown, setDropdown] = useState({ user: false, info: false })
  const user = useContext(UserContext)

  return (
    <NoteHeaderContainer>
      <div className="note-header-icons-container">
        <IconStyle>
          <i
            onClick={setDropdown((prev) => {
              return { ...prev, info: !prev.info }
            })}
          >
            info
          </i>
        </IconStyle>

        <IconStyle>
          <i>delete</i>
        </IconStyle>

        {dropdown.info && <InfoDropdown />}
      </div>

      <div className="note-header-user-dropdown-container">
        <UserDropdownToggle
          onClick={setDropdown((prev) => {
            return { ...prev, user: !prev.user }
          })}
        >
          {user.email}
        </UserDropdownToggle>

        {dropdown.user && <UserDropdown />}
      </div>
    </NoteHeaderContainer>
  )
}
