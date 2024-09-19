import { TFunction } from 'i18next';
import { ArticleType } from '../model/consts/consts';
import type { ArticleTabsConfig } from '../model/types/article';

export const getArticleTabsSelectConfig = (t: TFunction): ArticleTabsConfig => ({
    defaultCheckedValue: ArticleType.ALL,
    name: 'type',
    tabOptions: [
        {
            value: ArticleType.ALL,
            label: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            label: t('ИT'),
        },
        {
            value: ArticleType.ECONOMICS,
            label: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            label: t('Наука'),
        },
    ],
});
