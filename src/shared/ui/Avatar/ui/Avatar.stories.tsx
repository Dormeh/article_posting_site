import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg,
    alt: 'Avatar',
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    size: 50,
    src: AvatarImg,
    alt: 'Avatar',
};
export const Dark = Template.bind({});
Dark.args = {
    src: AvatarImg,
    alt: 'Avatar',
};
export const DarkSmall = Template.bind({});
DarkSmall.args = {
    size: 50,
    src: AvatarImg,
    alt: 'Avatar',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
