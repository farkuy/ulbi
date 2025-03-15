import { memo } from 'react';
import { IOptions } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { COUNTRY } from '../model/types';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
    className?: string;
    value?: COUNTRY;
    onChangeCountry?: (value: COUNTRY) => void;
    readonly?: boolean;
}

const allCountry: IOptions<COUNTRY>[] = [
    { value: COUNTRY.RUSSIA, content: COUNTRY.RUSSIA },
    { value: COUNTRY.GERMANY, content: COUNTRY.GERMANY },
    { value: COUNTRY.USA, content: COUNTRY.USA },
    { value: COUNTRY.JAPAN, content: COUNTRY.JAPAN },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className, value, onChangeCountry, readonly,
    } = props;

    const onChange = (value: string) => {
        if (onChangeCountry) onChangeCountry(value as COUNTRY);
    };

    return (
        <ListBox
            onChange={onChange}
            defaultValue="Выберите страну"
            value={value}
            items={allCountry}
            className={className}
            readonly={readonly}
        />
    );
});
