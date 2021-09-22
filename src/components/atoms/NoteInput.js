import { useEffect } from "react"
import styled from "styled-components"

const Input = styled.textarea`
  resize: none;
  width: calc(100% - 80px);
  height: calc(100% - 40px);
  outline: none;
  padding: 20px 40px;
  text-align: justify;
  background-color: var(--aboveBg);
  color: var(--white);
  border: none;
  border-bottom: 1px solid #888;
`

export default function NoteInput({ currentNote, noteValue, setNoteValue }) {
  useEffect(() => {
    setNoteValue(currentNote.content)
  }, [currentNote, setNoteValue])

  return (
    <Input
      value={noteValue}
      onChange={({ target }) => setNoteValue(target.value)}
      maxLength="2500"
    ></Input>
  )
}
