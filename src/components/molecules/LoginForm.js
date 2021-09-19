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

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit} method="POST">
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
      <FormButton type="submit">Log in</FormButton>
    </Form>
  )
}
