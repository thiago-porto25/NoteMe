import { useState, useEffect } from "react"
import styled from "styled-components"

const Input = styled.textarea`
  resize: none;
  width: calc(100% - 85px);
  height: calc(100% - 40px);
  outline: none;
  padding: 20px 40px;
  text-align: justify;
`

export default function NoteInput({ currentNote }) {
  const [value, setValue] = useState("")

  useEffect(() => {
    setValue(currentNote.content)
  }, [currentNote])

  return (
    <Input
      value={value}
      onChange={({ target }) => setValue(target.value)}
      maxLength="2500"
    ></Input>
  )
}
