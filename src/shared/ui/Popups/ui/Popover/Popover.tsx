import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { Button } from '../../../Button/Button';
import { Direction } from '../../../../model/types/common';
import { classNames } from '../../../../lib/classNames/classNames';
import cls from './Popover.module.scss';
import commonCls from '../../styles/PopupCommon.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode | string;
    direction: Direction;
    children: ReactNode;
}
export const Popover = (props: PopoverProps) => {
    const { className, children, trigger, direction } = props;

    return (
        <HPopover className={classNames(cls.Popover, {}, [className])}>
            <HPopover.Button as={Button} className={commonCls.btn}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(commonCls.menu, {}, [commonCls[direction]])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
