import styled from "styled-components"

const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--aboveBg);
  font-size: 14px;

  @media (max-width: 950px) {
    display: none;
  }

  p {
    text-align: center;
    color: var(--white);

    a {
      color: var(--white);
      opacity: 0.87;
    }
  }
`

export default function Footer() {
  return (
    <Foot>
      <p>
        Webpage created by{" "}
        <a href="https://github.com/thiago-porto25">Thiago Porto</a>.{` `}
        <a href="https://storyset.com/people">
          People illustrations by Storyset
        </a>
      </p>
    </Foot>
  )
}
