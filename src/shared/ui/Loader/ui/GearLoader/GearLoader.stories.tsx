import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { GearLoader } from './GearLoader';

export default {
    title: '.../GearLoader',
    component: GearLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof GearLoader>;

const Template: ComponentStory<typeof GearLoader> = (args) => <GearLoader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
