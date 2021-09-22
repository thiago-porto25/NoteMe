import styled from "styled-components"

const NotesListItemContainer = styled.section`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  background-color: var(--bg);
  border-top: 1px solid gray;
  color: var(--white);
  transition: 150ms ease-in-out;
  cursor: pointer;
  box-sizing: border-box;

  &:last-child {
    border-bottom: 1px solid gray;
  }

  &.selected {
    background-color: var(--primary);
    color: #000;
  }

  .notes-list-item-inner {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 100%;
    width: 100%;

    * {
      padding: 0 2.3rem;
      box-sizing: border-box;
    }

    h1 {
      font-size: 20px;
      margin-bottom: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
    }

    p {
      font-size: 14px;
      opacity: 0.6;
      margin-top: 0.2rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
    }
  }
`

export default function NotesListItem({ note, currentNote, setCurrentNote }) {
  const handleClick = () => {
    setCurrentNote(note)
  }

  return (
    <NotesListItemContainer
      className={currentNote.id === note.id ? "selected" : null}
      onClick={handleClick}
    >
      <div className="notes-list-item-inner">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
      </div>
    </NotesListItemContainer>
  )
}
