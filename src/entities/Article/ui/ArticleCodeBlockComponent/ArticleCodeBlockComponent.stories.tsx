import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType, ArticleCodeBlock } from 'entities/Article/model/types/article';
import { codeBlock } from 'shared/config/tests/constants/codeBlock';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    block: codeBlock as ArticleCodeBlock,
};

export const Dark = Template.bind({});
Dark.args = {
    block: codeBlock as ArticleCodeBlock,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
