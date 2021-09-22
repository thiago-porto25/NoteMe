import styled from "styled-components"
import { LoadingSpinner } from "../bosons"

const Button = styled.button`
  width: 6rem;
  height: 2rem;
  cursor: pointer;
  background-color: var(--${({ color }) => color});
  color: ${({ color }) => (color === "aboveBg" ? "white" : "")};
  border: none;

  * {
    width: 13px;
    height: 13px;
  }

  &:hover {
    background-color: ${({ color }) =>
      color === "aboveBg" ? "var(--thirdLayer)" : "var(--primaryClear)"};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export default function SpecialButton({ children, loading, color, ...rest }) {
  return (
    <Button {...rest} color={color}>
      {loading ? <LoadingSpinner /> : children}
    </Button>
  )
}
