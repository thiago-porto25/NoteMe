import { useContext, useState } from "react"
import { useNotes } from "../../hooks"
import HomeTemplate from "../templates/HomeTemplate"
import NotesContext from "../../context/notesContext"
import UserContext from "../../context/userContext"

export default function Home() {
  const user = useContext(UserContext)
  const { userNotes } = useNotes(user)
  const [currentNote, setCurrentNote] = useState(null)

  return (
    <NotesContext.Provider value={{ userNotes, currentNote, setCurrentNote }}>
      <HomeTemplate />
    </NotesContext.Provider>
  )
}
