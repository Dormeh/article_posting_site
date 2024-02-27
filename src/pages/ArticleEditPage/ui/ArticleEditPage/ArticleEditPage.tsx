import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    return (
        <div>
            {id
                ? `${t('Редактирование статьи')}: ${id}`
                : `${t('Создать новую статью')}`}
        </div>
    );
};

export default memo(ArticleEditPage);
