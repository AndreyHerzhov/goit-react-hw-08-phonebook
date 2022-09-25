import { useState } from "react";
import { addContact } from "redux/contacts/contacts-operations";
import { useDispatch } from "react-redux";

const useForm = ({initialState}) => {
    const [state, setState] = useState({...initialState});
    const dispatch = useDispatch()
 
    const handleChange = ({target}) => {
        
        const { name, value } = target;
        const newValue =  value;
     
        setState(prevState => ({
            ...prevState,
            [name]: newValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(state)
        dispatch(addContact(state))
    //    onSubmit({...state}) 
       setState({...initialState})
    };

    return {state, setState, handleChange, handleSubmit}
}

export default useForm;