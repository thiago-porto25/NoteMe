import styled from "styled-components"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"

const UserDropdownToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
  color: var(--primary);

  .user-email {
    user-select: none;

    @media (max-width: 550px) {
      display: none;
    }
  }

  .user-icon {
    display: none;

    @media (max-width: 550px) {
      display: block;
      margin: 0.3rem 0;

      svg {
        width: 33px;
        height: 33px;
      }
    }
  }
`

export default function UserDropdownToggle({ children, isDropdownOpen }) {
  return (
    <UserDropdownToggleContainer>
      {!isDropdownOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
      <p className="user-email">{children}</p>
      <p className="user-icon">
        <BiUserCircle />
      </p>
    </UserDropdownToggleContainer>
  )
}
