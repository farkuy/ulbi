import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib';
import { DropDownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupCLs from '../../styles/styles.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    readonly?: boolean;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(val: T) => void;
    direction?: DropDownDirection;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        value,
        defaultValue,
        onChange,
        className,
        readonly,
        direction = 'top right',
    } = props;

    const optionsMod = [cls[direction]];

    return (
        <HListbox
            as="div"
            className={classNames(popupCLs.wrapper, {}, [className])}
            value={value}
            onChange={onChange}
            disabled={readonly}
        >
            <HListbox.Button
                className={popupCLs.trigger}
                disabled={readonly}
            >
                <Button
                    disabled={readonly}
                >
                    {value ?? defaultValue}
                </Button>
            </HListbox.Button>
            <HListbox.Options
                className={classNames(
                    cls.options,
                    {},
                    optionsMod,
                )}
            >
                {items?.map((item) => (
                    <HListbox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li className={classNames(cls.item, {
                                [popupCLs.active]: active,
                                [cls.disabled]: item.disabled,
                            })}
                            >
                                {selected && '!!!'}
                                {item.content}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
}
