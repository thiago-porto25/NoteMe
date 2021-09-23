import styled from "styled-components"
import {
  SidebarHeader,
  NotesList,
  NoteHeader,
  NoteContainer
} from "../organisms"
import { Notification } from "../atoms"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const HomeTemplateContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 5fr);
  width: 100%;
  height: 100vh;

  @media (max-width: 620px) {
    grid-template-columns: minmax(0, 1fr);
  }

  .sidebar {
    border-left: 1px solid #888;

    @media (max-width: 620px) {
      display: none;
    }
  }

  .sidebar-mobile {
    border-left: 1px solid #888;
    display: none;

    @media (max-width: 620px) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 11;
      height: 100vh;
      width: 100%;
    }
  }

  .note-container-frame {
    border-left: 1px solid #888;
  }
`

export default function HomeTemplate({ notification, setNotification }) {
  const [mobileBarOpen, setMobileBarOpen] = useState(false)

  useEffect(() => {
    if (document.documentElement.clientWidth > 620) setMobileBarOpen(false)
  }, [])

  const slideIn = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x: "0",
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 50,
        stiffness: 500
      }
    },
    exit: {
      x: "-100vw"
    }
  }

  return (
    <HomeTemplateContainer>
      <div className="sidebar">
        <SidebarHeader />
        <NotesList />
      </div>

      <AnimatePresence exitBeforeEnter={true}>
        {mobileBarOpen && (
          <motion.div
            className="sidebar-mobile"
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SidebarHeader
              mobileBarOpen={mobileBarOpen}
              setMobileBarOpen={setMobileBarOpen}
            />
            <NotesList
              mobileBarOpen={mobileBarOpen}
              setMobileBarOpen={setMobileBarOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="note-container-frame">
        <NoteHeader setMobileBarOpen={setMobileBarOpen} />
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
