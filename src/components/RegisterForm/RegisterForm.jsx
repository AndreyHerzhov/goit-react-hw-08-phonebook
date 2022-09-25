import { initialState } from "./initialState";
import useForm from "shared/hooks/useForm";
import PropTypes from "prop-types"
import { InputGroup, Button, Form  } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";

const RegisterForm = ({onSubmit}) => {
    const {state, handleChange,setState } = useForm({initialState, onSubmit})
    const {name, email, password} = state;
    const dispatch = useDispatch()

    const addUser = (e) => {
        e.preventDefault()
        dispatch(signup(state));
        setState({...initialState})
    }

    return (
        <div>
             <Form className="add-form" onSubmit={addUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                </Form.Group>
                <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control
                        onChange={handleChange}
                        value={name} name="name"
                        type="text"
                        placeholder="User Name"
                        
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                        <Form.Control
                        onChange={handleChange}
                        value={email} 
                        name="email"
                        type="email"
                        placeholder="example@gmail.com" 
                        
                        aria-describedby="basic-addon1"
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                        <Form.Control
                        onChange={handleChange}
                        value={password} 
                        name="password"
                        type="password"
                        placeholder="Password" 
                        
                        aria-describedby="basic-addon1"
                        />
                </InputGroup>

                
                    
                <Button type="submit">Register</Button>
            
        </Form>
            
        {/* <Form action="" onSubmit={addUser}>
            <GroupWrapper>
                <Label htmlFor="">User Name:</Label>
                <Input value={name} name="name" onChange={handleChange} type="text" 
                  required
                  placeholder="User Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                />
            </GroupWrapper>
            <GroupWrapper>
                <Label htmlFor="">Email:</Label>
                <Input value={email} name="email" onChange={handleChange} type="email" 
                //  required
                 placeholder="example@gmail.com" 
                //  pattern=""
                />
            </GroupWrapper>
            <GroupWrapper>
                <Label htmlFor="">Password:</Label>
                <Input value={password} name="password" onChange={handleChange} type="password" 
                 required
                 placeholder="Password" 
                //  pattern=""
                />
            </GroupWrapper>
            
                <Button type="submit">Register</Button>
            
        </Form> */}
        </div>
    )

}

export default RegisterForm;


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
  };
