import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articlesMockData } from 'entities/Article/config/mock/articlesMockData';
import { ArticlesRecommendations } from './ArticlesRecommendations';

export default {
    title: 'pages/ArticleDetailsPage/ArticlesRecommendations',
    component: ArticlesRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            articleDetailsPage: {
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
        }),
    ],
} as ComponentMeta<typeof ArticlesRecommendations>;

const Template: ComponentStory<typeof ArticlesRecommendations> = (args) => (
    <ArticlesRecommendations {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
