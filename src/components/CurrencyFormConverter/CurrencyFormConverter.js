import s from './CurrencyFormConverter.module.css';
import React, { useState } from 'react';
import Button from '../common/Button/Button';
import Container from '../common/Container/Container';
import { CSSTransition } from 'react-transition-group';
// import fadeNotification from '../../fadeNotification.module.css';
import opacityEffect from '../../opacityEffect.module.css';
// import Notification from '../Notification';
import { useSelector} from 'react-redux';
import { currencySelectors } from '../../redux/currency';
import { Select, TextField } from '@material-ui/core';
import rounded from '../../utils/rounded';


export default function Form() {

const currency = useSelector(currencySelectors.getCurrecy);
const baseCurrency = useSelector(currencySelectors.getBaseCurrency);

const [ baseCurrenc, setBaseCurrency] = useState('');
const [ convertCurrency, setConvertCurrency] = useState('');
const [ converterResult, setConverterResult] = useState('');    
// const [ message, setMessage] = useState('');
// const [ alert, setAlert] = useState(null);

    
    const handleChangeSelect = (e) => {
        if (e.target.id === "select-baseCurrency") {
            setBaseCurrency(e.target.value);
        }
        if (e.target.id === "select-convertCurrency") {
            setConvertCurrency(e.target.value);
        }

    }

   const handleAddContact = e => {
     e.preventDefault();
     setConverterResult(null);
       const inputValue = e.currentTarget[0].value;
       const base =  e.currentTarget[2].value;
       const convert = e.currentTarget[4].value;
     
       setConvertCurrency(convert);

       let baseValue = null;
       let convertValue = null;

       for (const item in currency) {
        if (item === base) {
           baseValue = currency[item];
           }
           
        if (item === convert) {
          convertValue = currency[item];
        }
       }
       
       let result = (inputValue * convertValue * 100) / (baseValue * 100)
      setConverterResult(rounded(result))
  };

  
  
  // const visibleMessage = (stringMessage) => {
  //   setMessage(stringMessage);
  //   setAlert(true);
  //     setTimeout(() => {
  //       setAlert(false);
  //     }, 3000)
  // }



    return ( <>
      {/* <CSSTransition in={alert} timeout={1000} classNames={fadeNotification} unmountOnExit>
        <Notification text={message} color="red"/>
      </CSSTransition> */}
      <form onSubmit={handleAddContact} className={s.convertForm}>
        <TextField type="number" id="outlined-basic" label="Outlined" variant="outlined" />
         <Select variant="outlined" labelId="label" id="select-baseCurrency" native={true}  onChange={handleChangeSelect} value={baseCurrenc === null ? baseCurrency : baseCurrenc}>
        
              {currency !== null ? (
                Object.keys(currency).map((item) => {
                 return(<option key={item} value={item}>{item}</option>)
                })
                ) : (
                  <option key="1" value=""></option>
                )}
       
            </Select>
            <span className={s.textTo}>to</span>
             <Select margin="dense"   variant="outlined" labelId="label" id="select-convertCurrency" native={true}  onChange={handleChangeSelect} value={convertCurrency === null ? baseCurrency : convertCurrency}>
        
              {currency !== null ? (
                Object.keys(currency).map((item) => {
                 return(<option key={item} value={item}>{item}</option>)
                })
                ) : (
                  <option key="1" value=""></option>
                )}
       
            </Select>
       
        <Button text={'Convert'} type={'submit'} color={'blue'} />
        </form>
      < Container>
        <CSSTransition in={converterResult !== ''} timeout={1000} classNames={opacityEffect} unmountOnExit>
          <span className={s.converterResult}>{`${convertCurrency}: ${converterResult}`}</span>
        </CSSTransition>
      </Container>
        
      </>
    );
  }


