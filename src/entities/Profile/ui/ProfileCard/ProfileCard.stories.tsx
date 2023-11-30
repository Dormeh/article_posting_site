import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { testProfileData } from 'shared/config/storybook/constants/profileData';
import { Profile } from 'entities/Profile';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: testProfileData as Profile,
};

export const Dark = Template.bind({});
Dark.args = {
    data: testProfileData as Profile,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
