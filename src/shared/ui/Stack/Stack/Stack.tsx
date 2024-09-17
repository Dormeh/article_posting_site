import { createElement, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Stack.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'evenly' | 'stretch';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'column';
export type FlexGap = 4 | 7 | 8 | 10 | 16 | 20 | 32;

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    tagName?: keyof JSX.IntrinsicElements;
    children?: ReactNode;
    direction?: FlexDirection;
    justify?: FlexJustify;
    align?: FlexAlign;
    gap?: FlexGap;
    max?: boolean;
    maxHeight?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: cls['justify_flex-start'],
    center: cls.justify_center,
    end: cls['justify_flex-end'],
    between: cls['justify_space-between'],
    evenly: cls['justify_space-evenly'],
    stretch: cls.justify_stretch,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls['align_flex-start'],
    center: cls.align_center,
    end: cls['align_flex-end'],
    stretch: cls.align_stretch,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.direction_row,
    column: cls.direction_column,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap_4,
    7: cls.gap_7,
    8: cls.gap_8,
    10: cls.gap_10,
    16: cls.gap_16,
    20: cls.gap_20,
    32: cls.gap_32,
};

export const Stack = (props: StackProps) => {
    const {
        className,
        tagName = 'div',
        justify = 'stretch',
        align = 'stretch',
        direction = 'row',
        gap,
        max = true,
        maxHeight = false,
        children,
        ...otherProps
    } = props;

    const classes = [
        className,
        justify && justifyClasses[justify],
        align && alignClasses[align],
        direction && directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return createElement(
        tagName,
        {
            className: classNames(
                cls.Stack,
                { [cls.max]: max, [cls.maxHeight]: maxHeight },
                classes,
            ),
            ...otherProps,
        },
        children,
    );
};
