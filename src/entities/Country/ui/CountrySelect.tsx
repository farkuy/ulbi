import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { IOptions, Select } from 'shared/ui/Select/Select';
import { COUNTRY } from '../model/types';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
    className?: string;
    value?: COUNTRY;
    onChangeCountry?: (value: COUNTRY) => void;
    readonly?: boolean;
}

const allCountry: IOptions<COUNTRY>[] = [
    { value: COUNTRY.RUSSIA, label: COUNTRY.RUSSIA },
    { value: COUNTRY.GERMANY, label: COUNTRY.GERMANY },
    { value: COUNTRY.USA, label: COUNTRY.USA },
    { value: COUNTRY.JAPAN, label: COUNTRY.JAPAN },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className, value, onChangeCountry, readonly,
    } = props;

    const onChange = (value: COUNTRY) => {
        if (onChangeCountry) onChangeCountry(value);
    };

    return (
        <Select
            value={value}
            onChange={onChange}
            className={classNames(cls.CurrencySelect, {}, [className])}
            options={allCountry}
            disable={readonly}
        />
    );
});
