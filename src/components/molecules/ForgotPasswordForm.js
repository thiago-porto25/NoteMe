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
  }
`

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

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
      <FormButton type="submit">Reset Password</FormButton>
      {error && <Error message={error} />}
    </Form>
  )
}
