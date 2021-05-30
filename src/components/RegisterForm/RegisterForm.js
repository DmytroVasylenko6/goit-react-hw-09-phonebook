import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import s from './RegisterForm.module.css';
import { CSSTransition } from 'react-transition-group';
import fadeNotification from '../../fadeNotification.module.css';
import Notification from '../Notification';
import { authSelectors, authOperations, authActions } from '../../redux/auth';

export default function RegisterForm() {
  
  const [name, setName ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(null);

  const error = useSelector(authSelectors.getErrorMessage);
  const errorStatus = useSelector(authSelectors.getErrorStatus);


  if (errorStatus) {
       setTimeout(() => {
       dispatch(authActions.errorStatus(false))
      }, 3000)
  }

  const dispatch = useDispatch();
  const onRegister = useCallback((state) => dispatch(authOperations.register(state)), [dispatch]);

  const handleInputChange = ({ target: { name, value } }) => {
    
    if (name === 'name') {
     setName(value);
      return
    }
    
    if (name === 'email') {
     setEmail(value);
      return
    }

    if (name === 'password') {
      setPassword(value);
      return
    }
  }
  
  const visibleMessage = (stringMessage) => {
    setMessage(stringMessage);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000)
      setTimeout(() => {
        setMessage('');
      }, 4000)
  }

   const handleSubmit = e => {
     e.preventDefault();
      if (name === '') {
      visibleMessage('Please enter name!');
      return;
    };
    if (password === '') {
      visibleMessage('Please enter password!');
      return;
     };
      if (email === '') {
      visibleMessage('Please enter password!');
      return;
    };
    
     onRegister({ name, email, password });
     setName('');
     setEmail('');
     setPassword('');
  }
  


  return (
          
    <div>
                <CSSTransition in={alert || errorStatus} timeout={1000} classNames={fadeNotification} unmountOnExit>
                   <Notification text={message === '' ? error : message} color="red"/>
                </CSSTransition>
                <form onSubmit={handleSubmit} className={s.form}>
                    <Input
                       label="Name"
                       type="text"
                       name="name"
                       value={name}
                       placeholder="Enter name..."
                       onChange={handleInputChange}
                     />

                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Enter email..."
                      onChange={handleInputChange}
                    />

                    <Input
                      label="Password"
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Enter password..."
                      onChange={handleInputChange}
                    />

                  <Button text={'Register'} type={'submit'} color={'blue'} />
                </form>
           </div>
        )
    }
