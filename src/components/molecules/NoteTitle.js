import { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { IconStyle } from "../bosons"
import { BiEdit } from "react-icons/bi"
import { setNoteTitleWithFirebase } from "../../services/notesCRUD"

const NoteTitleContainer = styled.div`
  border-bottom: 1px solid #888;
  height: 3.5rem;

  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .edit-title-button {
      margin-right: 20px;
      height: fit-content;
      border: none;
      background-color: transparent;

      svg {
        &:hover {
          color: var(--primaryClear);
        }
      }
    }

    h1 {
      padding-left: 30px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 80%;
      color: var(--white);
      font-size: 24px;
      margin: 0;
      user-select: none;
    }

    .save-title-button {
      margin-right: 20px;
      border: none;
      width: 4rem;
      height: 2rem;
      background-color: var(--primary);
      color: black;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        background-color: var(--primaryClear);
      }

      &:disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    }

    .title-input {
      border: none;
      font-size: 24px;
      outline: none;
      color: var(--white);
      font-weight: bold;
      background-color: var(--bg);
      height: 80%;
      width: 80%;
      padding: 0 30px;
    }
  }
`

export default function NoteTitle({
  currentNote,
  setCurrentNote,
  setError,
  titleValue,
  setTitleValue
}) {
  const [isEditing, setIsEditing] = useState(false)

  const inputRef = useRef(null)

  const handleSave = async () => {
    await setNoteTitleWithFirebase({ titleValue, currentNote, setError })
    setCurrentNote((prev) => ({ ...prev, title: titleValue }))
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  useEffect(
    () => setTitleValue(currentNote.title),
    [currentNote, setTitleValue]
  )

  useEffect(() => {
    if (isEditing) inputRef.current.focus()
  }, [isEditing])

  useEffect(() => {
    setIsEditing(false)
  }, [currentNote])

  const isSaveDisabled = titleValue.length < 2

  return (
    <NoteTitleContainer>
      <section>
        {isEditing ? (
          <input
            ref={inputRef}
            className="title-input"
            type="text"
            maxLength="40"
            minLength="2"
            value={titleValue}
            onChange={({ target }) => setTitleValue(target.value)}
          />
        ) : (
          <h1>{titleValue}</h1>
        )}

        {isEditing ? (
          <button
            className="save-title-button"
            onClick={handleSave}
            type="submit"
            disabled={isSaveDisabled}
          >
            <i>Save</i>
          </button>
        ) : (
          <button
            className="edit-title-button"
            type="button"
            onClick={handleEdit}
          >
            <IconStyle>
              <BiEdit />
            </IconStyle>
          </button>
        )}
      </section>
    </NoteTitleContainer>
  )
}
