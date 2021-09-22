import UserContext from "./context/userContext"
import { Switch, Route } from "react-router-dom"
import { useAuthListener } from "./hooks"
import { ProtectedRoute, IsUserRedirect } from "./helpers"
import * as ROUTES from "./constants/routes"
import {
  Home,
  Login,
  Signup,
  ForgotPassword,
  NotFound
} from "./components/pages"

function App() {
  const { user } = useAuthListener()

  return (
    <UserContext.Provider value={user}>
      <Switch>
        <ProtectedRoute user={user} exact path={ROUTES.HOME}>
          <Home />
        </ProtectedRoute>

        <IsUserRedirect
          path={ROUTES.LOGIN}
          user={user}
          loggedInPath={ROUTES.HOME}
        >
          <Login />
        </IsUserRedirect>

        <IsUserRedirect
          path={ROUTES.SIGNUP}
          user={user}
          loggedInPath={ROUTES.HOME}
        >
          <Signup />
        </IsUserRedirect>

        <IsUserRedirect
          path={ROUTES.FORGOT_PASSWORD}
          user={user}
          loggedInPath={ROUTES.HOME}
        >
          <ForgotPassword />
        </IsUserRedirect>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </UserContext.Provider>
  )
}

export default App
//
