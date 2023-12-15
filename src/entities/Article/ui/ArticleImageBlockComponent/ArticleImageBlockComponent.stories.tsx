import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from 'entities/Article/model/types/article';
import ArticleImage from './storybook.png';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    block: {
        title: 'Article Image Block Component',
        type: ArticleBlockType.IMAGE,
        src: ArticleImage,
        id: '1',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    block: {
        title: 'Article Image Block Component',
        type: ArticleBlockType.IMAGE,
        src: ArticleImage,
        id: '1',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
