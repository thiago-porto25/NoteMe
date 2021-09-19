import styled from "styled-components"

const Input = styled.input`
  border: 1px solid grey;
  background-color: var(--thirdLayer);
  padding: 5px 10px;
  color: var(--white);
  opacity: 0.77;
  border-radius: 2px;
  height: 1.8rem;

  &:focus,
  :hover {
    box-shadow: 0px 0px 3px grey;
  }

  &:focus {
    outline: var(--primary) solid 1px;
  }
`

export default function FormInput({ type, value, setValue, placeholder }) {
  return (
    <Input
      type={type}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      placeholder={placeholder}
    />
  )
}
