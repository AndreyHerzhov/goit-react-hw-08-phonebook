import { initialState } from "./initialState";
import useForm from "shared/hooks/useForm";
import PropTypes from "prop-types"
import { InputGroup, Button, } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


const FormAddContact = () => {
    const {state, handleChange, handleSubmit} = useForm({initialState})
    const {name, number} = state;
        
    return (
       
        <Form className="add-form" onSubmit={handleSubmit}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
            
           </Form.Group>
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <Form.Control
                onChange={handleChange}
                value={name} name="name"
                type="text"
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
        </InputGroup>
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <Form.Control
                onChange={handleChange}
                value={number} 
                name="number"
                type="tel"
                placeholder="+380(50)-48-58-168" 
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                aria-describedby="basic-addon1"
                />
        </InputGroup>

        
            
                <Button type="submit">Добавить</Button>
            
        </Form>
       
    )

}

export default FormAddContact;


FormAddContact.propTypes = {
    onSubmit: PropTypes.func,
  };
