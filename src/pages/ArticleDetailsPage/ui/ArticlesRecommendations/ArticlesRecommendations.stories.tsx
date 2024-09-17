import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articlesMockData } from 'entities/Article/config/mock/articlesMockData';
import withMock from 'storybook-addon-mock';
import { ArticlesRecommendations } from './ArticlesRecommendations';

export default {
    title: 'pages/ArticleDetailsPage/ArticlesRecommendations',
    component: ArticlesRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), withMock],
    parameters: {
        mockData: [
            {
                url: `${__API__}recommendations?_expand=profile&_limit=6`,
                method: 'GET',
                status: 200,
                response: articlesMockData,
            },
        ],
    },
} as ComponentMeta<typeof ArticlesRecommendations>;

const Template: ComponentStory<typeof ArticlesRecommendations> = (args) => (
    <ArticlesRecommendations {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
