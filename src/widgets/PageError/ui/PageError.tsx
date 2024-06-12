import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import { VStack } from 'shared/ui/Stack';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <VStack
            justify="center"
            align="center"
            className={classNames(cls.PageError, {}, ['app', theme, className])}
        >
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ButtonTheme.OUTLINE} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </VStack>
    );
};
