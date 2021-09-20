import styled from "styled-components"
import { LoadingSpinner } from "../bosons"

const Button = styled.button``

export default function SpecialButton({ children, loading }) {
  return <Button>{loading ? <LoadingSpinner /> : children}</Button>
}
