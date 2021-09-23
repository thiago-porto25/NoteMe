import { useState } from "react"
import styled from "styled-components"
import { FormInput, FormButton, Error } from "../atoms"
import { createUserWithFirebase } from "../../services/authFunctionsFirebase"

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
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    setLoading(true)

    await createUserWithFirebase({
      email,
      password,
      name,
      setError,
      setLoading
    })
  }

  const isDisabled =
    email.length <= 6 ||
    password.length <= 5 ||
    name.length <= 2 ||
    confirmPassword !== password

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
        minLength="7"
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
      <FormButton disabled={isDisabled} loading={loading} type="submit">
        Sign up
      </FormButton>
      {error && <Error>{error}</Error>}
    </Form>
  )
}
