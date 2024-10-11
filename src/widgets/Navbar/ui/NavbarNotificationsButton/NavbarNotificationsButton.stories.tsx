import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { notificationList } from 'shared/config/tests/constants/notificationList';
import { Notification } from 'entities/Notification/model/types/notification';
import { HStack } from 'shared/ui/Stack';
import { NavbarNotificationsButton } from './NavbarNotificationsButton';

export default {
    title: 'widgets/Navbar/NavbarNotificationsButton',
    component: NavbarNotificationsButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({}),
        withMock,
        (Story) => (
            <HStack style={{ padding: '350px 350px' }} max={false}>
                <Story />
            </HStack>
        ),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}notifications`,
                method: 'GET',
                status: 200,
                response: notificationList as Notification[],
                delay: 1500,
            },
        ],
    },
} as ComponentMeta<typeof NavbarNotificationsButton>;

const Template: ComponentStory<typeof NavbarNotificationsButton> = (args) => (
    <NavbarNotificationsButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
