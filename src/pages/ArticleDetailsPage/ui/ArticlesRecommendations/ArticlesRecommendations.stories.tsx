import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlesRecommendations } from './ArticlesRecommendations';

export default {
    title: '.../ArticlesRecommendations',
    component: ArticlesRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesRecommendations>;

const Template: ComponentStory<typeof ArticlesRecommendations> = (args) => <ArticlesRecommendations {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
