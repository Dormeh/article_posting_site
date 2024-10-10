import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { notificationList } from 'shared/config/tests/constants/notificationList';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';

export default {
    title: 'shared/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), withMock],
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
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
