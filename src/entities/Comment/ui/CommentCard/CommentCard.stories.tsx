import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarImg from 'shared/assets/images/storybook.jpg';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        comment: {
            profile: {
                id: '1',
                first: 'Тимур',
                lastname: 'Ульби',
                username: 'admin',
                age: 22,
                currency: 'RUB',
                country: 'Russia',
                city: 'Moscow',
                avatar: AvatarImg,
                email: 'adf@azdaf.ru',
                phone: '13131321321321',
            },
            id: '1',
            text: 'Some comment text',
            profileId: '1',
            articleId: '1',
        },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

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
