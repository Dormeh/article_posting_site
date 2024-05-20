import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Page from 'shared/ui/Page/ui/Page';
import { GearLoader } from 'shared/ui/Loader';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    return (
        <Page>
            {id ? `${t('Редактирование статьи')}: ${id}` : `${t('Создать новую статью')}`}
            <GearLoader title={t('Страница в разработке')} />
        </Page>
    );
};

export default memo(ArticleEditPage);
