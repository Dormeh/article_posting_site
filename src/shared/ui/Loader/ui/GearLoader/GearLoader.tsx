import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import GearOne from 'shared/assets/icons/gears/gear_1.svg';
import GearTwo from 'shared/assets/icons/gears/gear_2.svg';
import GearThree from 'shared/assets/icons/gears/gear_3.svg';
import cls from './GearLoader.module.scss';

interface GearLoaderProps {
    className?: string;
    title?: string;
}

/**
 * компонент loader/заглушка
 * @param {className} - для стилизации снаружи компонента
 * @param {title} - заголовок для лоадера
 */
export const GearLoader = memo((props: GearLoaderProps) => {
    const { className, title } = props;

    return (
        <div className={classNames(cls.GearLoader, {}, [className])}>
            <GearOne className={`${cls.gear} ${cls.one}`} />
            <GearTwo className={`${cls.gear} ${cls.two}`} />
            <GearThree className={`${cls.gear} ${cls.three}`} />
            <Text className={cls.text} size={TextSize.L} title={title} titleClassName={cls.title} />
        </div>
    );
});
