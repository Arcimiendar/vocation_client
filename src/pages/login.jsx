import LoginForm from "../components/login/login"
import useToken from "../components/auth/useToken";

export default function Login() {
    let setToken = useToken()[1];
    return <LoginForm setToken={setToken}/>
}
