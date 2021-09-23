import { useContext, useState } from "react"
import { useNotes } from "../../hooks"
import HomeTemplate from "../templates/HomeTemplate"
import NotesContext from "../../context/notesContext"
import UserContext from "../../context/userContext"

export default function Home() {
  const user = useContext(UserContext)
  const { userNotes } = useNotes(user)
  const [currentNote, setCurrentNote] = useState(null)
  const [notification, setNotification] = useState({
    type: "error",
    text: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
  })

  return (
    <NotesContext.Provider
      value={{
        userNotes,
        currentNote,
        setCurrentNote,
        setNotification,
        notification
      }}
    >
      <HomeTemplate
        notification={notification}
        setNotification={setNotification}
      />
    </NotesContext.Provider>
  )
}
