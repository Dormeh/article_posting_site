import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Type text',
    type: 'text',
    name: 'test',
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Type text',
    type: 'text',
    name: 'test',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
