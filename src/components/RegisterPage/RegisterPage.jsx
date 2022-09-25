import RegisterForm from "components/RegisterForm"
import { useSelector } from "react-redux"
import { getAuthError } from "redux/auth/auth-selector"
import { Container } from "react-bootstrap"
 
const RegisterPage = () => {
    const {status,message} = useSelector(getAuthError)
   

    return (
        <Container className="main">
            <h2>Register Page</h2>
            <RegisterForm />
            {status  && <p>{message}</p>}
        </Container>
    )
}

export default RegisterPage