import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Control } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/ui/Loader/Loader';
import { Form } from 'shared/ui/Form/ui/Form';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import { profileConfig } from '../../model/config';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    readonly?: boolean;
    data?: Profile;
    control?: Control;
    error?: string;
    isLoading?: boolean;
    errors?: FieldErrors;
    onClick?: () => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { data, className, readonly, error, isLoading, onClick, ...otherProps } = props;
    const { t } = useTranslation('profile');

    if (error && !data) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
                <Text theme={TextTheme.ERROR} title={t('Произошла сетевая ошибка')} />
                <Text className={cls.title} theme={TextTheme.ERROR} text={t(error)} />
                <Text theme={TextTheme.PRIMARY} text={t('Попробуйте обновить страницу')} />
            </div>
        );
    }
    if (isLoading && !data) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.loading])}>
                <Loader />
            </div>
        );
    }
    return (
        <div
            className={classNames(
                cls.ProfileCard,
                { [cls.editing]: !readonly, [cls.readOnly]: readonly },
                [className],
            )}
            onClick={onClick}
        >
            <div className={cls.avatarWrapper}>
                <Avatar src={data?.avatar} />
            </div>
            <Form
                className={classNames(cls.profileForm, {}, [className])}
                fields={profileConfig}
                data={data}
                formError={error}
                readonly={readonly}
                {...otherProps}
            />
        </div>
    );
};
