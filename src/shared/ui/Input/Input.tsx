import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type InputPropsBase = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputPropsBase{
    className?: string;
    value: string;
    onChange: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autoFocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>();
    const [isFocused, setIsFocused] = useState(false);

    const mods: Record<string, boolean> = {
        [cls.focus]: isFocused,
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return (
        <input
            ref={inputRef}
            className={classNames(cls.Input, mods, [className])}
            type={type}
            onChange={onChangeHandler}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            data-testid="input"
            {...otherProps}
        />
    );
});
