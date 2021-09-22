import styled from "styled-components"
import { SpecialButton } from "../atoms"

const NoteSaveContainer = styled.div`
  width: fit-content;
  margin-right: 20px;
  display: flex;
  gap: 15px;
`

export default function NoteSave({ loading }) {
  return (
    <NoteSaveContainer>
      <SpecialButton color="primary" loading={loading}>
        Save
      </SpecialButton>
      <SpecialButton color="aboveBg" loading={false}>
        Cancel
      </SpecialButton>
    </NoteSaveContainer>
  )
}
