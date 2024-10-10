import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Notification } from '../../model/types/notification';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'shared/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;
const item: Notification = {
    id: '1',
    title: 'title',
    description: 'description',
    userId: '1',
};

export const Primary = Template.bind({});
Primary.args = {
    item,
};

export const Dark = Template.bind({});
Dark.args = {
    item,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryAsLink = Template.bind({});
PrimaryAsLink.args = {
    item: {
        ...item,
        title: 'title as link',
        description: 'content as link',
        href: '/',
    },
};
