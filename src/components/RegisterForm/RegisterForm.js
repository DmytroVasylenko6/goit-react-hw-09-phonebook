import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import s from './RegisterForm.module.css';
import { authOperations } from '../../redux/auth';

export default function RegisterForm() {
  
  const [name, setName ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

   const handleSubmit = e => {
     e.preventDefault();
     onRegister({ name, email, password });
     setName('');
     setEmail('');
     setPassword('');
    }


        return (
            <div>
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
