import styled from "styled-components"

const Button = styled.button`
  background-color: var(--primary);
  width: 100%;
  border: none;
  border-radius: 5px;
  height: 2rem;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`

export default function FormButton({ children, type }) {
  return <Button type={type}>{children}</Button>
}
