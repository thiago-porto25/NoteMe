import styled from "styled-components"

const IconStyleContainer = styled.div`
  svg {
    color: var(--primary);
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 150ms ease-in-out;
  }
`

export default function IconStyle({ children }) {
  return <IconStyleContainer>{children}</IconStyleContainer>
}
