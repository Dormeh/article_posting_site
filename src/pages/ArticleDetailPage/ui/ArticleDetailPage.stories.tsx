import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articleTestData } from 'entities/Article/ui/ArticleDetails/articleTestData';
import ArticleDetailPage from './ArticleDetailPage';

const articleComments = {
    ids: ['1', '2'],
    isLoading: false,
    error: undefined,
    entities: {
        1: {
            user: {
                id: '1',
                username: 'TestUser',
            },
            id: '1',
            text: 'Some comment text',
        },
        2: {
            user: {
                id: '1',
                username: 'TestUser',
            },
            id: '2',
            text: 'Some comment text',
        },
    },
};
export default {
    title: 'pages/ArticleDetailPage',
    component: ArticleDetailPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({
        articleComments,
        articleDetails: {
            data: articleTestData,
        },
    })],
} as ComponentMeta<typeof ArticleDetailPage>;

const Template: ComponentStory<typeof ArticleDetailPage> = (args) => <ArticleDetailPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
