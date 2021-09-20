import styled from "styled-components"
import { SpecialButton } from "../atoms"

const NoteSaveContainer = styled.div``

export default function NoteSave({ loading }) {
  return (
    <NoteSaveContainer>
      <SpecialButton loading={loading}>Save</SpecialButton>
      <SpecialButton loading={false}>Cancel</SpecialButton>
    </NoteSaveContainer>
  )
}
