import { Authcontainer } from "../store/AuthUser";
import AuthScreen from "./AuthScreen";
import Home from "./Home";
const HomePage = () => {
	const { user } = Authcontainer();

	return <>{user ? < Home/> : <AuthScreen />}</>;
};
export default HomePage;