import styled from "styled-components"
import { AiOutlineCheckSquare } from "react-icons/ai"

const LogoText = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  font-size: 3rem;
  user-select: none;

  h1 {
    font-family: "Lora", sans-serif;
    font-size: inherit;
    margin: 0;
  }
`

export default function Logo() {
  return (
    <>
      <LogoText>
        <AiOutlineCheckSquare />
        <h1>NoteMe</h1>
      </LogoText>
    </>
  )
}
