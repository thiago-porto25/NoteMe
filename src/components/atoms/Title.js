import styled from "styled-components"

const Text = styled.p`
  color: var(--white);
  font-size: 23px;
  font-weight: bold;
  opacity: 0.87;
`

export default function Title({ text }) {
  return <Text>{text}</Text>
}
