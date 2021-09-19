import { useState } from "react"
import styled from "styled-components"
import { FormInput, FormButton } from "../atoms"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    margin-top: 20px;
  }
`

export default function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

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
      />
      <FormInput
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="E-mail"
      />
      <FormInput
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      <FormInput
        type="password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        placeholder="Confim password"
      />
      <FormButton type="submit">Sign up</FormButton>
    </Form>
  )
}
