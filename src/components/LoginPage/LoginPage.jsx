import LoginForm from "components/LoginForm"
import { Container } from "react-bootstrap"
  

const LoginPage = () => {
    // const {status,message} = useSelector(getAuthError)
    

    return (
        <Container className="main">
            <h2>LoginPage</h2>
            <LoginForm/>
        </Container>
    )
}

export default LoginPage