import { ButtonHTMLAttributes, ForwardedRef, forwardRef, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    OUTLINE_RED = 'outlineRed',
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
    children?: ReactNode;
}

const ButtonBase = (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { className, children, theme, design, size = ButtonSize.M, ...otherProps } = props;

    const additionalClasses = [className, theme && cls[theme], cls[size], design && cls[design]];

    return (
        <button
            type="button"
            ref={ref}
            className={classNames(cls.Button, {}, additionalClasses)}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export const Button = memo(forwardRef(ButtonBase));
