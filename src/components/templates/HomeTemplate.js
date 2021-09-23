import styled from "styled-components"
import {
  SidebarHeader,
  NotesList,
  NoteHeader,
  NoteContainer
} from "../organisms"
import { Notification } from "../atoms"
import { AnimatePresence } from "framer-motion"

const HomeTemplateContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 5fr);
  width: 100%;
  height: 100vh;

  .sidebar {
    border-left: 1px solid #888;
  }

  .note-container-frame {
    border-left: 1px solid #888;
  }
`

export default function HomeTemplate({ notification, setNotification }) {
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
      <AnimatePresence exitBeforeEnter={true}>
        {notification && (
          <Notification message={notification} setMessage={setNotification} />
        )}
      </AnimatePresence>
    </HomeTemplateContainer>
  )
}
