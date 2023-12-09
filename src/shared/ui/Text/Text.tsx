import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export enum TextSize {
    L = 'sizeL',
    M = 'sizeM',
    S = 'sizeS',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}
interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    size?: TextSize;
    align?: TextAlign;
}
export const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,

    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
            {title && <h3 className={cls.title}>{title}</h3>}
            {text && <p className={classNames(cls.text, {}, [cls[size]])}>{text}</p>}
        </div>
    );
};
