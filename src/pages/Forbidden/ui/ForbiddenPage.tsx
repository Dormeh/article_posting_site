import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from 'shared/ui/Page/ui/Page';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';

const ForbiddenPage = () => {
    const { t } = useTranslation('forbidden');

    return (
        <Page>
            <VStack justify="center" align="center" maxHeight>
                <Text
                    size={TextSize.L}
                    theme={TextTheme.ERROR}
                    title={t('У вас нет доступа к этой странице')}
                />
            </VStack>
        </Page>
    );
};

export default ForbiddenPage;
