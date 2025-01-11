import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { CURRENCY } from 'entities/Currency';
import { IOptions, Select } from 'shared/ui/Select/Select';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    className?: string;
    value?: CURRENCY;
    onChangeCurrency?: (value: CURRENCY) => void;
    readonly?: boolean;
}

const allCurrency: IOptions[] = [
    { value: CURRENCY.RUB, label: 'RUB' },
    { value: CURRENCY.EUR, label: 'EUR' },
    { value: CURRENCY.USD, label: 'USD' },
    { value: CURRENCY.YEN, label: 'YEN' },

];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChangeCurrency, readonly,
    } = props;

    const onChange = (value: string) => {
        if (onChangeCurrency) onChangeCurrency(value as CURRENCY);
    };

    return (
        <Select
            value={value}
            onChange={onChange}
            className={classNames(cls.CurrencySelect, {}, [className])}
            options={allCurrency}
            disable={readonly}
        />
    );
});
