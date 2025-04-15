import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib';
import { DropDownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '@/shared/ui/Popups/styles/consts';
import cls from './Popover.module.scss';
import popupCLs from '../../styles/styles.module.scss';

interface PopoverProps {
    className?: string;
    children: ReactNode;
    trigger: ReactNode;
    direction?: DropDownDirection;

}

export const Popover = (props: PopoverProps) => {
    const {
        className, children, trigger, direction = 'bottom left',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(popupCLs.wrapper, {}, [className])}>
            <HPopover.Button className={popupCLs.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.item, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
