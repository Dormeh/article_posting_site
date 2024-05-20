import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from 'shared/ui/Page/ui/Page';
import { GearLoader } from 'shared/ui/Loader';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <GearLoader title={t('Страница в разработке')} />
        </Page>
    );
};

export default MainPage;
