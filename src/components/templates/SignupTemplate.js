import styled from "styled-components"
import { MaxWidthContainer, AuthFrame } from "../bosons"
import { Logo, Anchor } from "../atoms"
import { SignupForm } from "../molecules"
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
      margin-top: 40px;
    }
  }
`

export default function SignupTemplate() {
  return (
    <MaxWidthContainer>
      <LoginTemplateContainer>
        <AuthFrame>
          <Logo />
          <SignupForm />
          <Anchor textLink="Log in" to={ROUTES.LOGIN}>
            Already have an account?
          </Anchor>
        </AuthFrame>
      </LoginTemplateContainer>
    </MaxWidthContainer>
  )
}
