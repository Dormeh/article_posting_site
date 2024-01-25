import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ContentView } from 'shared/model/types/types';
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
    view: ContentView.PLATE,
};

export const PrimaryPlateLoading = Template.bind({});
PrimaryPlateLoading.args = {
    view: ContentView.PLATE,
    isLoading: true,
    articles: [],
};

export const DarkPlate = Template.bind({});
DarkPlate.args = {
    view: ContentView.PLATE,
};

DarkPlate.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkPlateLoading = Template.bind({});

DarkPlateLoading.args = {
    view: ContentView.PLATE,
    isLoading: true,
    articles: [],
};

DarkPlateLoading.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryList = Template.bind({});
PrimaryList.args = {
    view: ContentView.LIST,
};

export const PrimaryListLoading = Template.bind({});
PrimaryListLoading.args = {
    view: ContentView.LIST,
    isLoading: true,
    articles: [],
};

export const DarkList = Template.bind({});
DarkList.args = {
    view: ContentView.LIST,
};

DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkListLoading = Template.bind({});
DarkListLoading.args = {
    view: ContentView.LIST,
    isLoading: true,
    articles: [],
};

DarkListLoading.decorators = [ThemeDecorator(Theme.DARK)];
