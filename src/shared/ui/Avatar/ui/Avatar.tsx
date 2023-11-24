import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string;
    alt?: string;
    size?: number;
}

export const Avatar = ({
    className, src, alt, size,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: 150 || size,
        height: 150 || size,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
