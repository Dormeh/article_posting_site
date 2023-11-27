import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo(({
    className, src, alt, size,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 150,
        height: size || 150,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
});
