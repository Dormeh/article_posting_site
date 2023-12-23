import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        comments: [
            {
                user: {
                    username: 'TestUser',
                    id: '1',
                },
                id: '1',
                text: 'Some comment text',

            },
            {
                user: {
                    username: 'TestUser',
                    id: '1',
                },
                id: '2',
                text: 'Some comment text',

            },
        ],
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
    isLoading: true,
};
export const Dark = Template.bind({});
export const DarkLoading = Template.bind({});
DarkLoading.args = {
    isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];
Dark.decorators = [ThemeDecorator(Theme.DARK)];
