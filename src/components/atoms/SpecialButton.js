import styled from "styled-components"
import { LoadingSpinner } from "../bosons"

const Button = styled.button`
  width: 6rem;
  height: 2rem;
  cursor: pointer;
  background-color: var(--${({ color }) => color});
  color: ${({ color }) => (color === "aboveBg" ? "white" : "")};
  border: none;

  &:hover {
    background-color: ${({ color }) =>
      color === "aboveBg" ? "var(--thirdLayer)" : "var(--primaryClear)"};
  }
`

export default function SpecialButton({ children, loading, color }) {
  return (
    <Button color={color}>{loading ? <LoadingSpinner /> : children}</Button>
  )
}
