import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface IOptions {
    value: string;
    label: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    options: IOptions[];
    disable?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, value, onChange, options, disable,
    } = props;

    const onSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e.target.value);
    };

    const allOptions = useMemo(() => options.map((opt) => <option value={opt.value} label={opt.label} />), [options]);

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            { label && <div>{label}</div> }
            <select className={cls.select} disabled={disable} value={value} onChange={onSelectValue}>
                {allOptions}
            </select>
        </div>
    );
});
