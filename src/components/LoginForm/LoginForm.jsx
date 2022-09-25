import { initialState } from "./initialState";
import useForm from "shared/hooks/useForm";
import PropTypes from "prop-types"

import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";
import { InputGroup, Button,  } from "react-bootstrap";
import { Form } from "react-bootstrap";

const LoginForm = ({onSubmit}) => {
    const {state, handleChange, setState } = useForm({initialState, onSubmit})
    const { email, password } = state;
    const dispatch = useDispatch()

    const onLogin = (e) => {
        e.preventDefault()
        dispatch(login(state));
        setState({...initialState})
    }

    return (
        

        <Form className="add-form" onSubmit={onLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                </Form.Group>
                <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control
                        onChange={handleChange}
                        value={email} name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control
                        onChange={handleChange}
                        value={password} 
                        name="password"
                        type="password"
                        placeholder="Password" 
                        
                        aria-describedby="basic-addon1"
                        />
                </InputGroup>

                
                    
                <Button type="submit">Login</Button>
            
        </Form>
            
         
        
    )

}

export default LoginForm;


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
  };