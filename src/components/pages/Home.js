import { useContext } from "react"
import { useNotes } from "../../hooks"
import HomeTemplate from "../templates/HomeTemplate"
import NotesContext from "../../context/notesContext"
import UserContext from "../../context/userContext"

export default function Home() {
  const user = useContext(UserContext)
  const { userNotes } = useNotes(user)

  return (
    <NotesContext.Provider value={userNotes}>
      <HomeTemplate />
    </NotesContext.Provider>
  )
}
