import styled from "styled-components"
import { Link } from "react-router-dom"

const Text = styled.p`
  color: var(--white);
  opacity: 0.87;
  text-align: center;

  a {
    color: var(--primary);
  }
`

export default function Anchor({ to, textLink, children }) {
  return (
    <Text>
      {children} <Link to={to}>{textLink}</Link>
    </Text>
  )
}
