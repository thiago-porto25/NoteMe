import { useState } from "react"
import styled from "styled-components"
import { NoteInput } from "../atoms"
import { NoteSave, NoteTitle } from "../molecules"

const NoteContainerContainer = styled.div``

export default function NoteContainer() {
  const [loading, setLoading] = useState(false)

  return (
    <NoteContainerContainer>
      <div>
        <NoteTitle>title</NoteTitle>
      </div>
      <div>
        <NoteInput />
      </div>
      <div>
        <NoteSave loading={loading} />
      </div>
    </NoteContainerContainer>
  )
}
