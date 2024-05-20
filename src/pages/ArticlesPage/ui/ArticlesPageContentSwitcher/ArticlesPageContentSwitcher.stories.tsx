import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ContentView, SortOrder } from 'shared/model/types/types';
import { articlesMockData } from 'entities/Article/config/mock/articlesMockData';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { ArticlesPageContentSwitcher } from './ArticlesPageContentSwitcher';

export default {
    title: 'pages/ArticlesPage/ArticlesPageContentSwitcher',
    component: ArticlesPageContentSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        sortData: {
            sort: ArticleSortField.CREATED,
            order: SortOrder.ASC,
            type: ArticleType.ALL,
            search: '',
        },
        isLoading: false,
    },
    decorators: [
        StoreDecorator({
            articlesPage: {
                view: ContentView.PLATE,
                // entities: {
                //     1: articlesMockData[0],
                //     2: articlesMockData[1],
                //     3: articlesMockData[2],
                // },
                // ids: ['1', '2', '3'],
                error: undefined,
                isLoading: false,
                _inited: false,
                sortData: {},
            },
        }),
    ],
} as ComponentMeta<typeof ArticlesPageContentSwitcher>;

const Template: ComponentStory<typeof ArticlesPageContentSwitcher> = (args) => (
    <ArticlesPageContentSwitcher {...args} />
);

export const Primary = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
