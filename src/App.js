import UserContext from "./context/userContext"
import { Switch, Route } from "react-router-dom"
import { useAuthListener } from "./hooks"

function App() {
  const { user } = useAuthListener()

  return (
    <UserContext.Provider value={user}>
      <Switch>
        <Route to="/"></Route>
      </Switch>
    </UserContext.Provider>
  )
}

export default App
