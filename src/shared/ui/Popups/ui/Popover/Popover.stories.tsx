import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from '../../../Avatar/ui/Avatar';
import { VStack, HStack } from '../../../Stack';
import { Card } from '../../../Card/Card';
import { Popover } from './Popover';
import { Text } from '../../../Text/Text';
// import AvatarImg from '../../../assets/images/storybook.jpg';

const Content = () => (
    <VStack gap={4}>
        <Card>
            <p>Very loooooooooooooooooooooong content</p>
        </Card>
        <Card>
            <p>Some Content2</p>
        </Card>
        <Card>
            <p>Some Content3</p>
        </Card>
        <Card>
            <HStack gap={20} justify="evenly" align="center">
                <Avatar size={80} />
                <p>Content with avatar</p>
            </HStack>
        </Card>
    </VStack>
);

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    args: {
        children: <Content />,
        trigger: <Text text="Open Popover" />,
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <HStack style={{ padding: '350px 280px' }} max={false}>
                <Story />
            </HStack>
        ),
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom-right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom-left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top-right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top-left',
};

export const DarkBottomRight = Template.bind({});
DarkBottomRight.args = {
    direction: 'bottom-right',
};

DarkBottomRight.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkBottomLeft = Template.bind({});
DarkBottomLeft.args = {
    direction: 'bottom-left',
};

DarkBottomLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTopRight = Template.bind({});
DarkTopRight.args = {
    direction: 'top-right',
};

DarkTopRight.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTopLeft = Template.bind({});
DarkTopLeft.args = {
    direction: 'top-left',
};

DarkTopLeft.decorators = [ThemeDecorator(Theme.DARK)];
