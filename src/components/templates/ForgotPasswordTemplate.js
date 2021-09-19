import styled from "styled-components"
import { MaxWidthContainer, AuthFrame } from "../bosons"
import { Logo, Anchor } from "../atoms"
import { ForgotPasswordForm } from "../molecules"
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

    .forgot-text {
      color: var(--white);
      opacity: 0.87;
      width: 90%;
      text-align: justify;
      margin-bottom: 0;
    }
  }
`

export default function ForgotPasswordTemplate() {
  return (
    <MaxWidthContainer>
      <LoginTemplateContainer>
        <AuthFrame>
          <Logo />
          <p className="forgot-text">
            We will send an e-mail to reset your password.
          </p>
          <ForgotPasswordForm />
          <Anchor textLink="Log in" to={ROUTES.LOGIN}>
            Remembered your password?
          </Anchor>
        </AuthFrame>
      </LoginTemplateContainer>
    </MaxWidthContainer>
  )
}
