import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from 'entities/Article';
import { articlesMockData } from '../../model/mockData/articlesMockData';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        article: articlesMockData[0],
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const PrimaryPlate = Template.bind({});
PrimaryPlate.args = {
    view: ArticleView.PLATE,
};

export const DarkPlate = Template.bind({});
DarkPlate.args = {
    view: ArticleView.PLATE,
};

DarkPlate.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimaryList = Template.bind({});
PrimaryList.args = {
    view: ArticleView.LIST,
};

export const DarkList = Template.bind({});
DarkList.args = {
    view: ArticleView.LIST,
};

DarkList.decorators = [ThemeDecorator(Theme.DARK)];
