import styled from "styled-components"
import { FiPlus } from "react-icons/fi"
import { IconStyle } from "../bosons"

const NotesListEmptyContainer = styled.div`
  width: 100%;
  border-top: 1px solid #888;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    color: var(--white);
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 0 2rem;
    user-select: none;
  }

  svg {
    width: 50px;
    height: 50px;
    pointer-events: none !important;
  }
`

export default function NotesListEmpty() {
  return (
    <NotesListEmptyContainer>
      <p>Create a new Note by click the</p>
      <IconStyle>
        {" "}
        <FiPlus />
      </IconStyle>{" "}
      <p>button!</p>
    </NotesListEmptyContainer>
  )
}
