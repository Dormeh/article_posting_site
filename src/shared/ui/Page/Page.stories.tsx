import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from 'shared/ui/Text/Text';
import Page from './Page';

export default {
    title: 'shared/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: (
            <>
                <Text title="Test title for Page" />
                <Text text="Test text for Page" />
            </>
        ),
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
