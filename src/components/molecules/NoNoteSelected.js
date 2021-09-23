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

    @media (max-width: 600px) {
      width: 65px;
      height: 65px;
    }
  }

  p {
    width: fit-content;
    font-size: 30px;
    font-weight: bold;
    padding: 0 3rem;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 24px;
    }
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
