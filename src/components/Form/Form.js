import React, { useState, useCallback } from 'react';
import shortid from 'shortid';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import s from './Form.module.css';
import { CSSTransition } from 'react-transition-group';
import fadeNotification from '../../fadeNotification.module.css';
import Notification from '../Notification';
import { useSelector, useDispatch} from 'react-redux';
import { contactAdd } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

export default function Form() {


  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(null);

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const addContact = useCallback((newContact) => dispatch(contactAdd(newContact)), [dispatch]);

  const inputNameId = shortid.generate();
  const inputNumberId = shortid.generate();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
      return
    }

    if (name === 'number') {
      setNumber(value);
      return
    }

  };

   const handleAddContact = e => {
    e.preventDefault();
     handleSubmitForm(name, number);
  };

  const handleSubmitForm = (name, number) => {
 
    if (name === '') {
      visibleMessage('Please enter contact name!');
      return;
    };
    if (number === '') {
      visibleMessage('Please enter contact phone number!');
      return;
    };
    
    const hasContact = contacts.some(
      contact => contact.name === name,
    );

    if (hasContact) {
     visibleMessage(`${name} is already in contacts!`);
    } else {
     addContact({name, number});
    };

     reset();
  };
  
  
  const visibleMessage = (stringMessage) => {
    setMessage(stringMessage);
    setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000)
  }

  const reset = () => {
    setName('');
    setNumber('');
  };


    return ( <>
      <CSSTransition in={alert} timeout={1000} classNames={fadeNotification} unmountOnExit>
        <Notification text={message} color="red"/>
      </CSSTransition>
      <form onSubmit={handleAddContact} className={s.form}>
        <Input
          label="Name"
          type="text"
          name="name"
          value={name}
          id={inputNameId}
          placeholder="Enter name..."
          onChange={handleInputChange}
        />

        <Input
          label="Number"
          type="tel"
          name="number"
          value={number}
          id={inputNumberId}
          placeholder="+380990101010"
          onChange={handleInputChange}
          pattern="^\+?[0-9]{10,15}$"
        />

        <Button text={'Add contact'} type={'submit'} color={'blue'} />
      </form>
      </>
    );
  }

