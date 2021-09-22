import styled from "styled-components"
import { FiLogOut } from "react-icons/fi"
import { logoutWithFirebase } from "../../services/authFunctionsFirebase"
import { useContext } from "react"
import NotesContext from "../../context/notesContext"

const UserDropdownContainer = styled.div`
  background-color: var(--thirdLayer);
  height: 3rem;
  position: absolute;
  bottom: -2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

  p {
    margin: 0;
    padding: 1rem 2rem;
    font-weight: bold;
  }

  color: var(--white);

  &:hover {
    background-color: var(--primary);
    color: black;
  }
`

export default function UserDropdown() {
  const { setError } = useContext(NotesContext)

  const handleClick = () => {
    logoutWithFirebase({ setError })
  }

  return (
    <UserDropdownContainer onClick={handleClick}>
      <p>
        <FiLogOut /> Log Out
      </p>
    </UserDropdownContainer>
  )
}
