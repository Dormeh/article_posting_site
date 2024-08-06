import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ContentView, SortOrder } from 'shared/model/types/types';
import { articlesMockData } from 'entities/Article/config/mock/articlesMockData';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            articlesPage: {
                view: ContentView.PLATE,
                entities: {
                    1: articlesMockData[0],
                    2: articlesMockData[1],
                    3: articlesMockData[2],
                },
                error: undefined,
                ids: ['1', '2', '3'],
                isLoading: false,
                _inited: true,
                sortData: {
                    sort: ArticleSortField.CREATED,
                    order: SortOrder.ASC,
                    type: ArticleType.ALL,
                    search: '',
                },
            },
        }),
    ],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage />;

export const Primary = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
