import styled from "styled-components"
import { AiFillFileText } from "react-icons/ai"

const NoNoteSelectedContainer = styled.div`
  color: var(--white);
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  svg {
    color: var(--primary);
    width: 80px;
    height: 80px;
  }

  p {
    width: fit-content;
    font-size: 30px;
    font-weight: bold;
  }
`

export default function NoNoteSelected() {
  return (
    <NoNoteSelectedContainer>
      <AiFillFileText />
      <p>No note is selected at the moment!</p>
    </NoNoteSelectedContainer>
  )
}
