import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { articleTestData } from '../../../Article/config/mock/articleTestData';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articleDetails: {
            data: articleTestData,
        },
    }),
];
export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        articleDetails: {
            data: articleTestData,
        },
    }),
    ThemeDecorator(Theme.DARK),
];
export const DarkLoading = Template.bind({});
DarkLoading.args = {};
DarkLoading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const PurpleLoading = Template.bind({});
PurpleLoading.args = {};
PurpleLoading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
    ThemeDecorator(Theme.PURPLE),
];

export const DarkError = Template.bind({});
DarkError.args = {};
DarkError.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
    ThemeDecorator(Theme.DARK),
];
