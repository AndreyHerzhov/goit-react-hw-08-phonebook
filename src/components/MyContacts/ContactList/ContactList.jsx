import {  ContactListCard, ContactListInfo } from "./ContactList.styled";
import PropTypes from "prop-types" 
import { useSelector,useDispatch } from "react-redux";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";
import { fetchContacts, removeContact } from "redux/contacts/contacts-operations";
import { useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getFilteredContacts)
  
  
  useEffect(() => {
     dispatch(fetchContacts())
  },[dispatch])
  
    return (
        <ContactListCard>
         
                <Nav as="ul" navbarScroll="true">
                
                  {contacts.length > 0 &&
                  contacts.map(({ id, name, number }) => (
                    <Nav.Item as="li" key={id}>
                       <Card >
                       <ContactListInfo  >{name} - {number}</ContactListInfo>
                       </Card> 
                       <Button variant="outline-danger" onClick={() => dispatch(removeContact(id))}>Delete</Button>
                    </Nav.Item>
                ))}
                     
                </Nav>
        </ContactListCard>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func
  };