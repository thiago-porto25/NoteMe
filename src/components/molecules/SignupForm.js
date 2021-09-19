import { useState } from "react"
import styled from "styled-components"
import { FormInput, FormButton, Error } from "../atoms"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    margin-top: 20px;
    width: 90%;
  }
`

export default function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState(
    "Something went wrong! Something went wrong! Something went wrong!"
  )

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit} method="POST">
      <FormInput
        type="text"
        value={name}
        setValue={setName}
        placeholder="Name"
        minLength="3"
      />
      <FormInput
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="E-mail"
        minLength="6"
      />
      <FormInput
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Password"
        minLength="6"
      />
      <FormInput
        type="password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        placeholder="Confim password"
        minLength="6"
      />
      <FormButton type="submit">Sign up</FormButton>
      {error && <Error>{error}</Error>}
    </Form>
  )
}
