import styled from "styled-components"

const Frame = styled.div`
  width: 270px;
  background-color: var(--aboveBg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 0 0 1px var(--thirdLayer);
  border-radius: 2px;
`

export default function AuthFrame({ children }) {
  return <Frame className="auth-frame">{children}</Frame>
}
