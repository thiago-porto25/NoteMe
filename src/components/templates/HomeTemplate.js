import styled from "styled-components"
import {
  SidebarHeader,
  NotesList,
  NoteHeader,
  NoteContainer
} from "../organisms"

const HomeTemplateContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 100%;
  height: 100vh;
`

export default function HomeTemplate() {
  return (
    <HomeTemplateContainer>
      <div className="sidebar">
        <SidebarHeader />
        <NotesList />
      </div>
      <div className="note-container-frame">
        <NoteHeader />
        <NoteContainer />
      </div>
    </HomeTemplateContainer>
  )
}
