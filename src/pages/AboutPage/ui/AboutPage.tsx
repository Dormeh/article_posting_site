import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from 'shared/ui/Page/ui/Page';
import { GearLoader } from 'shared/ui/Loader';

const AboutPage = () => {
    const { t } = useTranslation(
        'about',
    );

    return (
        <Page>
            {t('О сайте')}
            <GearLoader title={t('Страница в разработке')} />
        </Page>
    );
};

export default AboutPage;
