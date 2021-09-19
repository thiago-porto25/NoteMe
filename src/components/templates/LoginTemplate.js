import styled from "styled-components"
import { MaxWidthContainer, AuthFrame } from "../bosons"
import { Logo, Anchor, AuthText } from "../atoms"
import { LoginForm } from "../molecules"
import * as ROUTES from "../../constants/routes"

const LoginTemplateContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .auth-frame {
    padding: 30px 30px;

    form {
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
`

export default function LoginTemplate() {
  return (
    <MaxWidthContainer>
      <LoginTemplateContainer>
        <AuthFrame>
          <Logo />
          <AuthText>Log in</AuthText>
          <LoginForm />
          <Anchor textLink="Sign up" to={ROUTES.SIGNUP}>
            Don't have an account?
          </Anchor>
          <Anchor textLink="Reset" to={ROUTES.FORGOT_PASSWORD}>
            Forgot your password?
          </Anchor>
        </AuthFrame>
      </LoginTemplateContainer>
    </MaxWidthContainer>
  )
}
