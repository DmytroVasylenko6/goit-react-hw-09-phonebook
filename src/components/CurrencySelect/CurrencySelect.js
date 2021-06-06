import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Select } from '@material-ui/core';
import { currencySelectors, currencyOperations, currencyActions} from '../../redux/currency';



export default function CurrencySelect() {
  const dispatch = useDispatch();

  const currency = useSelector(currencySelectors.getCurrecy);
  const baseCurrency = useSelector(currencySelectors.getBaseCurrency);
  const baseAPICurrency = useSelector(currencySelectors.getBaseAPICurrency);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('persist:currencyBase')) === null || JSON.parse(localStorage.getItem('persist:currencyBase')).currencyAr === "null") {
          dispatch(currencyOperations.getCurrency());
    }

  }, [dispatch]);

// console.log(JSON.parse(localStorage.getItem('persist:currencyBase')))

  useEffect(() => {
   
    if (baseCurrency) {

    let newCurrencyArrray = [];
    let baseCurrencyValue = null;
      
      for (const item in currency) {
        if (item === baseCurrency) {
          baseCurrencyValue = currency[item];
        }
      }

      for (const item in currency) {
      
      let convertValue = (currency[item] * 100) / (baseCurrencyValue * 100)
      newCurrencyArrray.push([item, convertValue]);
    }
    
    dispatch(currencyActions.parseCurrencySuccess(Object.fromEntries(newCurrencyArrray)));
    } 
    
    
  }, [ dispatch, baseCurrency]);




  const handleChangeSelect = (e) => {

  dispatch(currencyActions.baseCurrency(e.target.value))

  }


  return (
      <Select labelId="label" id="select" native={true}  onChange={handleChangeSelect} value={baseCurrency === null ? baseAPICurrency : baseCurrency}>
        
        {currency !== null ? (
          Object.keys(currency).map((item) => {
           return(<option key={item} value={item}>{item}</option>)
          })
          ) : (
            <option key="1" value=""></option>
          )}

     </Select>
  );
};

