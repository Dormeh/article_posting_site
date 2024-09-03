import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Profile } from 'entities/Profile';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { testProfileData } from '../../model/services/updateProfileData/profileData';
import { ProfileForm } from './ProfileForm';

export default {
    title: 'features/ProfileForm',
    component: ProfileForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            profile: { data: testProfileData as Profile },
        }),
    ],
} as unknown as ComponentMeta<typeof ProfileForm>;

const Template: ComponentStory<typeof ProfileForm> = (args) => <ProfileForm id="1" />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
