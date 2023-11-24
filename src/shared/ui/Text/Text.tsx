import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
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
interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    size?: TextSize;
}
export const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        size = TextSize.M,

    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <h3 className={cls.title}>{t(title)}</h3>}
            {text && <p className={classNames(cls.text, {}, [cls[size]])}>{t(text)}</p>}
        </div>
    );
};
