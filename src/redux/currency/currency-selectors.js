const getCurrecy = state => state.currency.currencyAr;

const getBaseCurrency = state => state.currency.baseCurrency;

const getBaseAPICurrency = state => state.currency.baseAPICurrency;


export default {
   getCurrecy,
   getBaseCurrency,
   getBaseAPICurrency
};