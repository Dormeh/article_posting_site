import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number
    height?: string | number
    borderRadius?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        borderRadius,
    } = props;

    return (
        <div
            style={{
                width,
                height,
                borderRadius,
            }}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    );
});
