import Section from '../../components/common/Section/Section';
import s from './CurrencyPage.module.css';
import { useSelector} from 'react-redux';
import { currencySelectors} from '../../redux/currency';
import CurrencyFormConverter from '../../components/CurrencyFormConverter';
import rounded from '../../utils/rounded';

export default function CurrencyPage() {
    
    const currency = useSelector(currencySelectors.getCurrecy);

    return (
        <>
            <div className={s.currencyContainer}>
                <div className={s.currencyItem}><span className={s.currencySymbol}>USD: </span><span className={s.currencyValue}> {currency ?  rounded(currency.USD) : 0}</span></div>
                <div className={s.currencyItem}><span className={s.currencySymbol}>UAH: </span><span className={s.currencyValue}> {currency ?  rounded(currency.UAH) : 0}</span></div>
                <div className={s.currencyItem}><span className={s.currencySymbol}>EUR: </span><span className={s.currencyValue}> {currency ?  rounded(currency.EUR) : 0}</span></div>
            </div>

            <Section title="Currency converter" appear={true} styles="phonebook">
                <CurrencyFormConverter/>
            </Section>
        </>
    )
}


