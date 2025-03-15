import { memo } from 'react';
import { IOptions } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { CURRENCY } from '../model/types';

interface CurrencySelectProps {
    className?: string;
    value?: CURRENCY;
    onChangeCurrency?: (value: CURRENCY) => void;
    readonly?: boolean;
}

const allCurrency: IOptions<CURRENCY>[] = [
    { value: CURRENCY.RUB, content: 'RUB' },
    { value: CURRENCY.EUR, content: 'EUR' },
    { value: CURRENCY.USD, content: 'USD' },
    { value: CURRENCY.YEN, content: 'YEN' },

];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChangeCurrency, readonly,
    } = props;

    const onChange = (value: string) => {
        if (onChangeCurrency) onChangeCurrency(value as CURRENCY);
    };

    return (
        <ListBox
            onChange={onChange}
            defaultValue="Укажите валюту"
            value={value}
            items={allCurrency}
            className={className}
            readonly={readonly}
        />
    );
});
