import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Stack.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = 4 | 8 | 16 | 32;

export interface StackProps {
    className?: string;
    children?: ReactNode;
    direction?: FlexDirection;
    justify?: FlexJustify;
    align?: FlexAlign;
    gap?: FlexGap;
    max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: cls['justify_flex-start'],
    center: cls.justify_center,
    end: cls['justify_flex-end'],
    between: cls.justify_between,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls['align_flex-start'],
    center: cls.align_center,
    end: cls['align_flex-end'],
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.direction_row,
    column: cls.direction_column,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap_4,
    8: cls.gap_8,
    16: cls.gap_16,
    32: cls.gap_32,
};

export const Stack = (props: StackProps) => {
    const {
        className,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max = true,
        children,
    } = props;

    const classes = [
        className,
        justify && justifyClasses[justify],
        align && alignClasses[align],
        direction && directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return <div className={classNames(cls.Stack, { [cls.max]: max }, classes)}>{children}</div>;
};
