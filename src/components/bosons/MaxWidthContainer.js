import styled from "styled-components"

const MaxWidth = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

export default function MaxWidthContainer({ children }) {
  return <MaxWidth>{children}</MaxWidth>
}
