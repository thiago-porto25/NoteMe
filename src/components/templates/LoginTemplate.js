import styled from "styled-components"
import { MaxWidthContainer, AuthFrame } from "../bosons"
import { Logo, Anchor, AuthText } from "../atoms"
import { LoginForm, Footer } from "../molecules"
import * as ROUTES from "../../constants/routes"

const LoginTemplateContainer = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  justify-items: center;
  min-height: 100vh;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }

  .login-image {
    max-width: 500px;
    user-select: none;

    @media (max-width: 950px) {
      display: none;
    }
  }

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
        <img
          className="login-image"
          src="/images/login.svg"
          alt="Login illustration"
        />
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
        <Footer />
      </LoginTemplateContainer>
    </MaxWidthContainer>
  )
}
