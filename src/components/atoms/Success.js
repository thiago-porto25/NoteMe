import styled from "styled-components"

const Succeeded = styled.p`
  color: var(--success);
  margin-bottom: 0;
  width: 90%;
  text-align: center;
`

export default function Success({ children }) {
  return <Succeeded>{children}</Succeeded>
}
