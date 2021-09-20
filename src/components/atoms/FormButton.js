import styled from "styled-components"
import { LoadingSpinner } from "../bosons"

const Button = styled.button`
  background-color: var(--primary);
  width: 15rem;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  height: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 150ms ease-in-out;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:hover {
    background-color: var(--primaryClear);
  }
`

export default function FormButton({ children, type, loading, ...rest }) {
  return (
    <Button {...rest} type={type}>
      {loading ? <LoadingSpinner /> : children}
    </Button>
  )
}
