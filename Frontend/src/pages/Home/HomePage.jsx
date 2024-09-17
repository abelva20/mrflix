import AuthScreen from "./AuthScreen";
import Home from "./Home"

const HomePage = () => {
    const user = false;
  return (
    <div>
        {user? <Home /> : <AuthScreen />}
    </div>
  )
}

export default HomePage