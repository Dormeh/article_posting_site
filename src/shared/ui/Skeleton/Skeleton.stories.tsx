import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width: '100%',
    height: 200,
};

export const PrimaryCircle = Template.bind({});
PrimaryCircle.args = {
    borderRadius: '50%',
    width: 200,
    height: 200,
};

export const Dark = Template.bind({});
Dark.args = {
    width: '100%',
    height: 200,
};

export const DarkCircle = Template.bind({});
DarkCircle.args = {
    borderRadius: '50%',
    width: 200,
    height: 200,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)];

export const Purple = Template.bind({});
Purple.args = {
    width: '100%',
    height: 200,
};
export const PurpleCircle = Template.bind({});
PurpleCircle.args = {
    borderRadius: '50%',
    width: 200,
    height: 200,
};

Purple.decorators = [ThemeDecorator(Theme.PURPLE)];
PurpleCircle.decorators = [ThemeDecorator(Theme.PURPLE)];
