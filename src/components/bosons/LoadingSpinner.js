import styled from "styled-components"

const Loader = styled.div`
  border: 0.3rem solid var(--primary);
  border-top: 0.3rem solid var(--white);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default function LoadingSpinner() {
  return <Loader></Loader>
}
