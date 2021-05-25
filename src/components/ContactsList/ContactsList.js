import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {contactDelete} from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import './fade.css'
import Button from '../common/Button/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const onDeleteContact = useCallback((id) => dispatch(contactDelete(id)), [dispatch]);
 

  return (
    <>
      <TransitionGroup component="ul" className={s.list}>
        
        {contacts.map(({ name, number, id }) => {
          return (
            <CSSTransition key={id} timeout={250} classNames="e-fade" appear={true}>
            <li id={id}  className={s.item}>
              <p>
                <span className={s.contactName}>{name}</span> <span>{number}</span> 
              </p>
              <Button
                text={'Delete'}
                listener={() => onDeleteContact(id)}
                color="red"
              />
              </li>
              </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
 }



ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};

