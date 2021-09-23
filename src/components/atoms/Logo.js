import styled from "styled-components"
import { AiOutlineCheckSquare } from "react-icons/ai"

const LogoText = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  font-size: ${({ size }) => (size === "small" ? "2rem" : "3rem")};
  user-select: none;

  h1 {
    font-family: "Lora", sans-serif;
    font-size: inherit;
    margin: 0;
  }
`

export default function Logo({ size }) {
  return (
    <>
      <LogoText size={size}>
        <AiOutlineCheckSquare />
        <h1>NoteMe</h1>
      </LogoText>
    </>
  )
}
