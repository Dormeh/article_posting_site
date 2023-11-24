import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
const selectOptions = [
    { value: 'value_1', label: 'Значение 1' },
    { value: 'value_2', label: 'Значение 2' },
    { value: 'value_3', label: 'Значение 3' },
];

const className = {
    wrapper: { marginTop: '20px' },
};

Primary.args = {
    label: 'Select label text',
    name: 'test',
    options: selectOptions,
    className: 'storybook',
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Select label text',
    name: 'test',
    options: selectOptions,
    className: 'storybook',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
