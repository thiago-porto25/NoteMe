import { useState } from "react"
import styled from "styled-components"
import { FormInput, FormButton, Error, Success } from "../atoms"
import { sendResetPasswordWithFirebase } from "../../services/authFunctionsFirebase"

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
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    setSuccess("")

    setLoading(true)

    await sendResetPasswordWithFirebase({ email, setError, setSuccess })

    setLoading(false)
  }

  const isDisabled = email.length <= 6

  return (
    <Form onSubmit={handleSubmit} method="POST">
      <FormInput
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="E-mail"
        minLength="7"
      />
      <FormButton disabled={isDisabled} loading={loading} type="submit">
        Reset Password
      </FormButton>
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
    </Form>
  )
}
