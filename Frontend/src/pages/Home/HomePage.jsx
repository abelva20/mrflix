import { Authcontainer } from "../store/AuthUser";
import AuthScreen from "./AuthScreen";
import Home from "./Home"

const HomePage = () => {
    const {user} = Authcontainer;
  return (
    <div>
        {user? <Home /> : <AuthScreen />}
    </div>
  )
}

export default HomePage