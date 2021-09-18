import styled from "styled-components"
import { Title } from "../atoms"
import { MaxWidthContainer } from "../bosons"
import { useHistory } from "react-router"
import * as ROUTES from "../../constants/routes"

const NotFoundContainer = styled.section`
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .image-not-found {
    max-width: 600px;
  }

  .button-not-found {
    cursor: pointer;
    background-color: var(--primary);
    border: none;
    box-shadow: 0 0 10px var(--aboveBg);
    width: 12rem;
    height: 2.5rem;
    font-weight: bold;
    font-size: 20px;
    transition: 100ms ease-in-out;

    &:hover {
      color: var(--white);
      transform: scale(1.08);
    }
  }
`

export default function NotFoundTemplate() {
  const history = useHistory()

  const handleClick = () => {
    history.push(ROUTES.HOME)
  }

  return (
    <MaxWidthContainer>
      <NotFoundContainer>
        <img
          className="image-not-found"
          src="/images/404.svg"
          alt="404 - Page Not Found"
        />
        <Title text="Oops... It appears this page doesn't exist or is under maintenance!" />
        <button className="button-not-found" onClick={handleClick}>
          Go back
        </button>
      </NotFoundContainer>
    </MaxWidthContainer>
  )
}
