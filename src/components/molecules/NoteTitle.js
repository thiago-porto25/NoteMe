import { useState } from "react"
import styled from "styled-components"
import { IconStyle } from "../bosons"

const NoteTitleContainer = styled.div``

export default function NoteTitle({ children }) {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState("")

  ///// Do this function's logic
  const handleSave = () => {
    setIsEditing(false)
  }

  return (
    <NoteTitleContainer>
      <form onSubmit={handleSave}>
        {isEditing ? (
          <input
            className="title-input"
            type="text"
            maxLength="20"
            minLength="2"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
        ) : (
          <h1>{children}</h1>
        )}

        {isEditing ? (
          <button type="submit">
            <IconStyle>
              <i>save</i>
            </IconStyle>
          </button>
        ) : (
          <button onClick={setIsEditing(true)}>
            <IconStyle>
              <i>edit</i>
            </IconStyle>
          </button>
        )}
      </form>
    </NoteTitleContainer>
  )
}
