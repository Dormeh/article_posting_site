import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ContentView } from 'shared/model/types/types';
import { articlesMockData } from 'entities/Article/model/mockData/articlesMockData';
import { articlesPageReducer } from '../model/slice/articlesPageSlice';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlePage',
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
            },
        }),
    ],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
