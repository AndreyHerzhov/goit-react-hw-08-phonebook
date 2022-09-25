import FormAddContact from "./FormAddContact";
import ContactList from "./ContactList";
import Filter from "./Filter/Filter";
import { Container } from "react-bootstrap";
 


const MyContacts = () => {
    
    return (
        <div>
            <Container className="main">
                <h2>Phonebook</h2>
                <FormAddContact/>
                <Filter/>
                <ContactList/>
            </Container>
        </div>
    )

}

export default MyContacts;

 