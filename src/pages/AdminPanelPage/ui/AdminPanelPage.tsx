import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from 'shared/ui/Page/ui/Page';
import { GearLoader } from 'shared/ui/Loader';

const AdminPanelPage = () => {
    const { t } = useTranslation('adminPanel');

    return (
        <Page>
            {t('Страница администрирования')}
            <GearLoader title={t('Страница в разработке')} />
        </Page>
    );
};

export default AdminPanelPage;
