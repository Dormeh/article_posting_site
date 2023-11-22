import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from 'shared/ui/Form/ui/Form';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { formChildNodes } from 'shared/ui/Form/model/formChildNodes';

export default {
    title: 'shared/Form',
    component: Form,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
        </Button>),
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
};
