import styled from "styled-components"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

const UserDropdownToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
  color: var(--primary);

  p {
    user-select: none;
  }
`

export default function UserDropdownToggle({ children, isDropdownOpen }) {
  return (
    <UserDropdownToggleContainer>
      {!isDropdownOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
      <p>{children}</p>
    </UserDropdownToggleContainer>
  )
}
