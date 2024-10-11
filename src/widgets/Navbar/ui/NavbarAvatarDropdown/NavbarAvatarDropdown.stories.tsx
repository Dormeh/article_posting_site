import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { HStack } from 'shared/ui/Stack';
import { UserRole } from 'shared/model/consts/common';
import { NavbarAvatarDropdown } from './NavbarAvatarDropdown';

export default {
    title: 'widgets/Navbar/NavbarAvatarDropdown',
    component: NavbarAvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({}),
        (Story) => (
            <HStack style={{ padding: '100px' }} max={false}>
                <Story />
            </HStack>
        ),
    ],
} as ComponentMeta<typeof NavbarAvatarDropdown>;

const Template: ComponentStory<typeof NavbarAvatarDropdown> = (args) => (
    <NavbarAvatarDropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryAuth = Template.bind({});
PrimaryAuth.decorators = [StoreDecorator({ user: { authData: { roles: [UserRole.ADMIN] } } })];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
