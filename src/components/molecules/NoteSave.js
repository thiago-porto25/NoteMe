import styled from "styled-components"
import { setNoteContentWithFirebase } from "../../services/notesCRUD"
import { SpecialButton } from "../atoms"

const NoteSaveContainer = styled.div`
  width: fit-content;
  margin-right: 20px;
  display: flex;
  gap: 15px;
`

export default function NoteSave({
  loading,
  setLoading,
  noteValue,
  currentNote,
  setError
}) {
  const handleSave = async () => {
    setLoading(true)

    await setNoteContentWithFirebase({ noteValue, currentNote, setError })

    setLoading(false)
  }

  const isDisabled =
    !!loading || noteValue.length < 1 || currentNote.content === noteValue

  return (
    <NoteSaveContainer onClick={handleSave}>
      <SpecialButton disabled={isDisabled} color="primary" loading={loading}>
        Save
      </SpecialButton>
    </NoteSaveContainer>
  )
}
