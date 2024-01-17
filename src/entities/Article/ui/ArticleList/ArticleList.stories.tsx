import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from 'entities/Article';
import { ArticleList } from './ArticleList';
import { articlesMockData } from '../../model/mockData/articlesMockData';

export default {
    title: 'entities/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        articles: articlesMockData,
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const PrimaryPlate = Template.bind({});
PrimaryPlate.args = {
    view: ArticleView.PLATE,
};

export const PrimaryPlateLoading = Template.bind({});
PrimaryPlateLoading.args = {
    view: ArticleView.PLATE,
    isLoading: true,
};

export const DarkPlate = Template.bind({});
DarkPlate.args = {
    view: ArticleView.PLATE,
};

DarkPlate.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkPlateLoading = Template.bind({});

DarkPlateLoading.args = {
    view: ArticleView.PLATE,
    isLoading: true,
};

DarkPlateLoading.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryList = Template.bind({});
PrimaryList.args = {
    view: ArticleView.LIST,
};

export const PrimaryListLoading = Template.bind({});
PrimaryListLoading.args = {
    view: ArticleView.LIST,
    isLoading: true,
};

export const DarkList = Template.bind({});
DarkList.args = {
    view: ArticleView.LIST,
};

DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkListLoading = Template.bind({});
DarkListLoading.args = {
    view: ArticleView.LIST,
    isLoading: true,
};

DarkListLoading.decorators = [ThemeDecorator(Theme.DARK)];
