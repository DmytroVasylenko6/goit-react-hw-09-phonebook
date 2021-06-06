import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import  currencyActions  from './currency-actions';

const currencyAr = createReducer(null, {
    [currencyActions.parseCurrencySuccess]: (_, { payload }) => payload,
});

const baseCurrency = createReducer(null, {
    [currencyActions.baseCurrency]: (_, { payload }) => payload,
});

const baseAPICurrency = createReducer('', {
    [currencyActions.baseAPICurrency]: (_, { payload }) => payload,
});

const error = createReducer('', {
    [currencyActions.parseCurrencyError]: (_, { payload }) => payload,
});



export default combineReducers({
  currencyAr,
  baseCurrency,
  baseAPICurrency,
  error
});