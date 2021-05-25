import React, { useState, useCallback } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import s from './LoginForm.module.css';
import { useDispatch} from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onLogin = useCallback((state) => dispatch(authOperations.logIn(state)), [dispatch])

  const handleInputChange = ({ target: { name, value } }) => {
    
       if (name === 'email') {
     setEmail(value);
      return
    }

    if (name === 'password') {
      setPassword(value);
      return
    }
    }

   const handleSubmit = e => {
      e.preventDefault();
    
      onLogin({ email, password })
      
      setEmail('');
      setPassword('');
    
    }
     
  return (
    
                <form onSubmit={handleSubmit} className={s.form}>
                
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

                  <Button text={'Log in'} type={'submit'} color={'blue'} />
                </form>
           
        )
    }
