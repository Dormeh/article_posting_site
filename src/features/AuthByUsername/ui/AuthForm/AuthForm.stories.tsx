import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AuthForm from './AuthForm';

export default {
    title: 'features/AuthForm',
    component: AuthForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    focus: true,
};
Primary.decorators = [
    StoreDecorator({
        loginForm: {
            authData: {},
        },
    }),
];
export const Dark = Template.bind({});

Dark.args = {
    focus: true,
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            authData: {},
        },
    }),
];

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    focus: true,
};
PrimaryError.decorators = [
    StoreDecorator({
        loginForm: {
            error: 'ERROR',
            authData: {
                username: 'test',
                password: 'test',
            },
        },
    }),
];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {};
PrimaryLoading.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true,
            authData: {
                username: 'test',
                password: 'test',
            },
        },
    }),
];
