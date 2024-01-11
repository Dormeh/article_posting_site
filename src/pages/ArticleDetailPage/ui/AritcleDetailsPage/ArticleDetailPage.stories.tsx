import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articleTestData } from 'entities/Article/ui/ArticleDetails/articleTestData';
import { articleComments } from 'pages/ArticleDetailPage/ui/articleComments';
import ArticleDetailPage from './ArticleDetailPage';

export default {
    title: 'pages/ArticleDetailPage/ArticleDetailsPage',
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
