import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articleTestData } from 'entities/Article/config/mock/articleTestData';
import { articlesMockData } from 'entities/Article/config/mock/articlesMockData';
import { articleComments } from '../../config/mock/articleComments';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({
        user: {
            authData: {
                profileId: '1',
            },
        },
        articleDetailsPage: {
            articleComments,
            articleRecommendations: {
                entities: {
                    1: articlesMockData[0],
                    2: articlesMockData[1],
                    3: articlesMockData[2],
                },
                error: undefined,
                ids: ['1', '2', '3'],
                isLoading: false,
            },
        },
        articleDetails: {
            data: articleTestData,
        },
    })],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
