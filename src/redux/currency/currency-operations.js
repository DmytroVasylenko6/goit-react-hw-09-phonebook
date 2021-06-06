import axios from 'axios';
import currencyActions from './currency-actions';

// const BASE_URL = 'http://data.fixer.io/api/';
// const API_KEY = '110f93b7f3c0f06ca0e99579a7104900';
const BASE_URL_2 = 'http://api.exchangeratesapi.io/v1/';
const API_KEY_2 = '20eae151cf40116a060cb335c1127ba3';

const getCurrency = credentials => async dispatch => {
    
    dispatch(currencyActions.parseCurrencyRequest());

    try {
        const response = await axios.get(`${BASE_URL_2}latest?access_key=${API_KEY_2}`);
        dispatch(currencyActions.parseCurrencySuccess(response.data.rates));
        dispatch(currencyActions.baseAPICurrency(response.data.base));
    } catch (error) {
        dispatch(currencyActions.parseCurrencyError(error.message));
    }
    
};
 
export default { getCurrency };