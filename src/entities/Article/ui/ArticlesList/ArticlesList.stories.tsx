import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlesView } from 'entities/Article';
import { ArticlesList } from './ArticlesList';
import { articlesMockData } from '../../model/mockData/articlesMockData';

export default {
    title: 'entities/ArticlesList',
    component: ArticlesList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        articles: articlesMockData,
    },
} as ComponentMeta<typeof ArticlesList>;

const Template: ComponentStory<typeof ArticlesList> = (args) => <ArticlesList {...args} />;

export const PrimaryPlate = Template.bind({});
PrimaryPlate.args = {
    view: ArticlesView.PLATE,
};

export const PrimaryPlateLoading = Template.bind({});
PrimaryPlateLoading.args = {
    view: ArticlesView.PLATE,
    isLoading: true,
};

export const DarkPlate = Template.bind({});
DarkPlate.args = {
    view: ArticlesView.PLATE,
};

DarkPlate.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkPlateLoading = Template.bind({});

DarkPlateLoading.args = {
    view: ArticlesView.PLATE,
    isLoading: true,
};

DarkPlateLoading.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryList = Template.bind({});
PrimaryList.args = {
    view: ArticlesView.LIST,
};

export const PrimaryListLoading = Template.bind({});
PrimaryListLoading.args = {
    view: ArticlesView.LIST,
    isLoading: true,
};

export const DarkList = Template.bind({});
DarkList.args = {
    view: ArticlesView.LIST,
};

DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkListLoading = Template.bind({});
DarkListLoading.args = {
    view: ArticlesView.LIST,
    isLoading: true,
};

DarkListLoading.decorators = [ThemeDecorator(Theme.DARK)];
