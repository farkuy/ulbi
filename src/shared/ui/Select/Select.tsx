import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface IOptions<T extends string>{
    value: T;
    label: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    value?: T;
    onChange?: (value: T) => void;
    options: IOptions<T>[];
    disable?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, value, onChange, options, disable,
    } = props;

    const onSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e.target.value as T);
    };

    const allOptions = useMemo(
        () => options.map((opt) => <option key={opt.value} value={opt.value} label={opt.label} />),
        [options],
    );

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            { label && <div>{label}</div> }
            <select className={cls.select} disabled={disable} value={value} onChange={onSelectValue}>
                {allOptions}
            </select>
        </div>
    );
};
