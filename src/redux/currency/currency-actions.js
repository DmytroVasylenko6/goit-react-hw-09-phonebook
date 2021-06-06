import { createAction } from '@reduxjs/toolkit';

const parseCurrencyRequest = createAction('currency/parseRequest');
const parseCurrencySuccess = createAction('currency/parseSuccess');
const parseCurrencyError = createAction('currency/parseError');

const baseCurrency = createAction('currency/baseCurrency');
const baseAPICurrency = createAction('currency/baseAPICurrency');


export default {
    parseCurrencyRequest,
    parseCurrencySuccess,
    parseCurrencyError,
    baseCurrency,
    baseAPICurrency
}