import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Form } from '../../Form/ui/Form';
import { Button, ButtonTheme } from '../../Button/Button';
import { formChildNodes } from '../model/formChildNodes';

export default {
    title: 'shared/Form',
    component: Form,
    args: {
        formTitle: 'Title text',
        footer: (
            <Button
                style={{
                    alignSelf: 'flex-end',
                }}
                type="submit"
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                Text
            </Button>
        ),
        focus: true,
        fields: [
            {
                name: 'login',
                label: 'test',
                required: true,
                type: 'text',
                Component: formChildNodes.Input,
            },
            {
                name: 'password',
                label: 'test',
                required: true,
                type: 'password',
                Component: formChildNodes.Input,
            },
        ],
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
