import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { codeBlock } from 'shared/config/tests/constants/codeBlock';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    code: codeBlock.code,
};

export const Dark = Template.bind({});
Dark.args = {
    code: codeBlock.code,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
