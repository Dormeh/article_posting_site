import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { Theme } from 'app/providers/ThemeProvider';
import { NotificationList } from 'entities/Notification';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { notificationList } from '../../config/tests/constants/notificationList';
import { Button } from '../Button/Button';
import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
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
                response: notificationList,
            },
        ],
    },
} as ComponentMeta<typeof Drawer>;
const Template: ComponentStory<typeof Drawer> = (args) => {
    const [isOpen, setIsOpen] = useState(true);
    const onClose = () => setIsOpen(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
            <Drawer {...args} onClose={onClose} isOpen={isOpen}>
                <NotificationList />
            </Drawer>
        </>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
