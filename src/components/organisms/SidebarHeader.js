import styled from "styled-components"
import { SearchBar } from "../molecules"
import { IconStyle } from "../bosons"
import { FiPlus } from "react-icons/fi"

const SidebarHeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--aboveBg);

  .add-icon {
    margin-left: -35px;
    transition: 300ms ease-in-out;

    &:hover {
      transform: rotate(-180deg);
      color: var(--primaryClear);
    }
  }

  .search-frame {
    margin: 10px 20px;
    width: calc(100% - 70px);
  }
`

export default function SidebarHeader() {
  return (
    <SidebarHeaderContainer>
      <div className="search-frame">
        <SearchBar />
      </div>

      <IconStyle>
        <FiPlus className="add-icon" />
      </IconStyle>
    </SidebarHeaderContainer>
  )
}
