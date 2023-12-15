import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { textBlock } from 'shared/config/tests/constants/textBlock';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    block: textBlock as ArticleTextBlock,
};

export const Dark = Template.bind({});
Dark.args = {
    block: textBlock as ArticleTextBlock,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
