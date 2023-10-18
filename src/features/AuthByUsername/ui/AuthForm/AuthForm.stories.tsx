import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AuthForm } from 'features/AuthByUsername';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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

export const Dark = Template.bind({});
Dark.args = {
    focus: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
