import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum ButtonDesign {
    SQUARE = 'square',
    ROUND = 'round',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    design?: ButtonDesign; // TODO на будущее лучше добавить пропс дизайн и все варианты добавить в enum
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        design,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const additionalClasses = [
        className,
        cls[theme],
        cls[size],
        cls[design],
    ];

    return (
        <button
            type="button"
            className={
                classNames(
                    cls.Button,
                    {},
                    additionalClasses,
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
