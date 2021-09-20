import { useState } from "react"
import styled from "styled-components"
import { FormInput, FormButton, Error } from "../atoms"
import { loginWithFirebase } from "../../services/authFunctionsFirebase"

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
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    setLoading(true)

    await loginWithFirebase({
      email,
      password,
      setError,
      setEmail,
      setPassword
    })
  }

  const isDisabled = email.length <= 6 || password.length <= 5 ? true : false

  return (
    <Form onSubmit={handleSubmit} method="POST">
      <FormInput
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="E-mail"
        minLength="7"
      />
      <FormInput
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Password"
        minLength="6"
      />
      <FormButton disabled={isDisabled} loading={loading} type="submit">
        Log in
      </FormButton>
      {error && <Error>{error}</Error>}
    </Form>
  )
}
