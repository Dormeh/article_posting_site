import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NavbarAvatarDropdown } from './NavbarAvatarDropdown';

export default {
    title: 'widgets/Navbar/NavbarAvatarDropdown',
    component: NavbarAvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavbarAvatarDropdown>;

const Template: ComponentStory<typeof NavbarAvatarDropdown> = (args) => (
    <NavbarAvatarDropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
