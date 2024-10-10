import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { HStack } from '../../../Stack';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Popups/Dropdown',
    component: Dropdown,
    args: {
        dropdownItems: [
            {
                content: 'Action',
                onClick: () => console.log('Action'),
            },
            {
                content: 'Another action',
                onClick: () => console.log('Another action'),
            },
            {
                content: 'Disabled item',
                onClick: () => console.log('Something else here'),
                disabled: true,
            },
            {
                content: 'Separated link',
                onClick: () => console.log('Separated link'),
            },
        ],
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <HStack style={{ padding: '200px' }} max={false}>
                <Story />
            </HStack>
        ),
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom-right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top-left',
};

export const TopRight = Template.bind({});

TopRight.args = {
    direction: 'top-right',
};

export const BottomLeftDark = Template.bind({});
BottomLeftDark.args = {};
BottomLeftDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomRightDark = Template.bind({});
BottomRightDark.args = {
    direction: 'bottom-right',
};
BottomRightDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TopLeftDark = Template.bind({});
TopLeftDark.args = {
    direction: 'top-left',
};
TopLeftDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TopRightDark = Template.bind({});

TopRightDark.args = {
    direction: 'top-right',
};
TopRightDark.decorators = [ThemeDecorator(Theme.DARK)];
