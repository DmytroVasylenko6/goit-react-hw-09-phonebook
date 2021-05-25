import React, { useEffect } from 'react';
import Section from '../../components/common/Section/Section';
import ContactsList from '../../components/ContactsList/ContactsList';
import Form from '../../components/Form/Form';
import shortid from 'shortid';
import Input from '../../components/common/Input/Input';
import Container from '../../components/common/Container/Container';
import { CSSTransition } from 'react-transition-group';
import fadeFindContacts from '../../fadeFindContacts.module.css';
import * as contactsAction from '../../redux/contacts/contacts-actions';
import { contactsParse } from '../../redux/contacts/contacts-operations';
import { getFilter, getContacts } from '../../redux/contacts/contacts-selectors';
import { useDispatch, useSelector} from 'react-redux';


export default function ContactsPage() {


  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsParse());
  }, [dispatch]);


  const inputFindId = shortid.generate();

    const  handleFindChange = event => {
    const filterValue = event.currentTarget;
   dispatch(contactsAction.contactFilter(filterValue.value));
  };

    return (
      <>
        <Section title="PhoneBook" appear={true} styles="phonebook">
          <Form />
        </Section>
    
        <Section title="Contacts" >
          
           
          <CSSTransition in={contacts.length > 1} timeout={250} classNames={fadeFindContacts} unmountOnExit>
            <Container>
              <Input
                label="Find contacts by name"
                type="text"
                name="filter"
                value={filter}
                id={inputFindId}
                placeholder="Find..."
                onChange={handleFindChange}
              />
            </Container>
          </CSSTransition>
          

          {contacts.length === 0 ? (
            <span style={{ display: 'block', textAlign: 'center' }}>
              No contacts
            </span>
          ) : (
            <ContactsList
              contacts={contacts}
            />
          )}
        </Section>
      </>
    );
}



