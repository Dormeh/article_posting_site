import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { testProfileData } from 'features/ProfileFormEdit/model/services/updateProfileData/profileData';
import { Profile } from '../../model/types/profile';
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

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    data: undefined,
    error: 'ERROR',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
    data: undefined,
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    data: testProfileData as Profile,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
