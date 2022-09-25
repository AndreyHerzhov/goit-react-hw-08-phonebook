import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFilter } from "redux/contacts/contacts-selectors";
import { setFilter } from "redux/contacts/contacts-sclice";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

export const Filter = () => {
        const dispatch = useDispatch()
        const filter = useSelector(getFilter)
        
        const onSetFilter = ({target}) => {
             
                dispatch(setFilter(target.value))
        }

        return(
            <>
            <InputGroup className="mb-3 input-filter">
                <InputGroup.Text id="basic-addon1">Find contacts by name</InputGroup.Text>
                <Form.Control
                
                placeholder="Enter contactName"
                aria-label="filter"
                aria-describedby="basic-addon1"
                type="text" 
                value={filter}
                onChange={onSetFilter}
                />
            </InputGroup>
            {/* <FilterInput type="text" value={filter} onChange={onSetFilter}/> */}
            </>
        )
    }
 

export default Filter

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}