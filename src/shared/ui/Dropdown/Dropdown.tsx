import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { Button } from '../Button/Button';
import { Direction } from '../../model/types/types';

export interface DropdownItem {
    content: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

interface DropdownProps {
    className?: string;
    dropdownTrigger?: ReactNode | string;
    dropdownItems: DropdownItem[];
    direction?: Direction;
}

export const Dropdown = memo((props: DropdownProps) => {
    const { t } = useTranslation();
    const {
        className,
        dropdownTrigger = t('Открыть меню'),
        dropdownItems,
        direction = 'bottom-left',
    } = props;
    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{dropdownTrigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [cls[direction]])} as="nav">
                {dropdownItems.map(({ content, onClick, href, disabled }) => {
                    if (href) {
                        return (
                            <Menu.Item
                                key={content}
                                as={AppLink}
                                to={href}
                                disabled={disabled}
                                className={({ active }) =>
                                    classNames(cls.dropdownItem, {
                                        [cls.active]: active,
                                    })
                                }
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            key={content}
                            as={Button}
                            onClick={onClick}
                            disabled={disabled}
                            className={({ active }) =>
                                classNames(cls.dropdownItem, {
                                    [cls.active]: active,
                                })
                            }
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
