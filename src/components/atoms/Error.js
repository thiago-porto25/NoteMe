import styled from "styled-components"

const Err = styled.p`
  color: var(--error);
  margin-bottom: 0;
  width: 90%;
  text-align: center;
`

export default function Error({ children }) {
  return <Err>{children}</Err>
}
