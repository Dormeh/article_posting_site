import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TabInput } from './TabInput';

export default {
    title: 'shared/TabInput',
    component: TabInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        value: 'test',
        label: 'Test',
        name: 'test',
        style: {
            marginBottom: '10px',
        },
    },
} as ComponentMeta<typeof TabInput>;

const Template: ComponentStory<typeof TabInput> = (args) => (
    <>
        <TabInput {...args} />
        <TabInput {...args} defaultChecked />
    </>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
