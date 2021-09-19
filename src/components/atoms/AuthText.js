import styled from "styled-components"

const Text = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: var(--white);
  opacity: 0.87;
  width: 90%;
  text-align: justify;
  margin-bottom: 0;
`

export default function AuthText({ children }) {
  return <Text>{children}</Text>
}
