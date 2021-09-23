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
  setCurrentNote,
  setNotification
}) {
  const handleSave = async () => {
    setLoading(true)

    await setNoteContentWithFirebase({
      noteValue,
      currentNote,
      setNotification
    })

    setNotification({
      type: "success",
      text: "You have successfully saved your Note!"
    })
    setCurrentNote((prev) => ({ ...prev, content: noteValue }))
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
