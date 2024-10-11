import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { notificationList } from 'shared/config/tests/constants/notificationList';
import { Notification } from 'entities/Notification/model/types/notification';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar/Navbar',
    component: Navbar,
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
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({ user: { authData: { username: 'admin' } } })];
