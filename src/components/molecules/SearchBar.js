import styled from "styled-components"
import { IconStyle } from "../bosons"
import { FiSearch } from "react-icons/fi"

const SearchBarContainer = styled.div`
  display: flex;
  border: 2px solid #888;
  border-radius: 20px;
  align-items: center;
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 2px var(--primary);
  }

  &:focus-within {
    border: 2px solid var(--primary);
    box-shadow: 0px 0px 2px var(--primary);

    .search-icon {
      color: var(--primary);
    }
  }

  .search-icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    color: #aaa;
  }
`

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  padding: 5px 15px;
  color: var(--white);
  width: 100%;
  font-size: 14px;
`

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput type="search" />
      <IconStyle>
        <FiSearch className="search-icon" />
      </IconStyle>
    </SearchBarContainer>
  )
}
