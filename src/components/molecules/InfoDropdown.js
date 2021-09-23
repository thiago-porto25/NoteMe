import { useEffect } from "react"
import styled from "styled-components"

const InfoDropdownContainer = styled.div`
  background-color: var(--primary);
  width: 12rem;
  height: 5rem;
  position: absolute;
  bottom: -4.5rem;
  left: 4rem;

  div {
    height: calc(50% - 0.5px);
    display: flex;
    align-items: center;
    color: black;

    p {
      pointer-events: none;
      font-size: 14px;
      margin: auto;
    }
  }
`

export default function InfoDropdown({ data, setDropdownInfo }) {
  const parseTimestamp = (timestamp) => {
    const arr = timestamp.toDate().toDateString().split(" ")
    arr.splice(1, 0, "-")

    return arr.join(" ")
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      setDropdownInfo(false)
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [setDropdownInfo])

  return (
    <InfoDropdownContainer>
      <div className="created-at">
        <p>Created: {parseTimestamp(data.createdAt)}</p>
      </div>
      <div className="updated-at">
        <p>Updated: {parseTimestamp(data.updatedAt)}</p>
      </div>
    </InfoDropdownContainer>
  )
}
