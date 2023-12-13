import { createElement, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export enum TextSize {
    L = 'sizeL',
    M = 'sizeM',
    S = 'sizeS',
    XS = 'sizeXS',
}

const TitleTags = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3',
    [TextSize.XS]: 'h4',
};

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
export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,

    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && createElement(TitleTags[size], { className: cls.title }, title)}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
