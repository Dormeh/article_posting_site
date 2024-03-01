import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import Arrow from 'shared/assets/icons/arrow_bold.svg';
import { Text } from 'shared/ui/Text/Text';
import EditIcon from 'shared/assets/icons/edit_icon.svg';
import { useSelector } from 'react-redux';
import { canArticleEditSelector } from 'pages/ArticleDetailsPage/model/selectors/canArticleEditSelector';
import { getArticleDetailsData } from 'entities/Article';
import { useRefWithSizeSate } from 'shared/lib/hooks/useElementSize/useElementSize';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const canEdit = useSelector(canArticleEditSelector);
    const article = useSelector(getArticleDetailsData);

    const [ref, isMobile] = useRefWithSizeSate<HTMLDivElement>(790);

    return (
        <div
            ref={ref}
            className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}
        >
            <AppLink className={cls.link} to={RouterPath.articles}>
                <Arrow className={cls.arrowIcon} />
                {!isMobile && (<Text text={t('Назад к списку статей')} className={cls.linkText} />)}
            </AppLink>
            {canEdit && (
                <AppLink className={cls.link} to={`${RouterPath.article_edit}${article?.id}`}>
                    {!isMobile && (<Text text={t('Редактировать')} className={cls.linkText} />)}
                    <EditIcon className={cls.editIcon} />
                </AppLink>
            )}
        </div>
    );
});
