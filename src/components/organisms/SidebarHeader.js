import styled from "styled-components"
import { SearchBar } from "../molecules"
import { IconStyle } from "../bosons"
import { FiPlus } from "react-icons/fi"
import { useContext } from "react"
import NotesContext from "../../context/notesContext"
import { createNoteWithFirebase } from "../../services/notesCRUD"

const SidebarHeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--aboveBg);

  .add-icon {
    margin-left: -35px;
    transition: 300ms ease-in-out;

    &:hover {
      transform: rotate(-180deg);
      color: var(--primaryClear);
    }
  }

  .search-frame {
    margin: 10px 20px;
    width: calc(100% - 70px);
  }
`

export default function SidebarHeader() {
  const { setError } = useContext(NotesContext)

  const handleAdd = async () => {
    await createNoteWithFirebase({ setError })
  }

  return (
    <SidebarHeaderContainer>
      <div className="search-frame">
        <SearchBar />
      </div>

      <IconStyle>
        <FiPlus className="add-icon" onClick={handleAdd} />
      </IconStyle>
    </SidebarHeaderContainer>
  )
}
