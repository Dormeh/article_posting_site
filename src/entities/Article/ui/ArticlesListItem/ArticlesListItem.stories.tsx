import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ContentView } from 'shared/model/types/types';
import { articlesMockData } from '../../config/mock/articlesMockData';
import { ArticlesListItem } from './ArticlesListItem';

export default {
    title: 'entities/ArticlesListItem',
    component: ArticlesListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        article: articlesMockData[0],
    },
} as ComponentMeta<typeof ArticlesListItem>;

const Template: ComponentStory<typeof ArticlesListItem> = (args) => <ArticlesListItem {...args} />;

export const PrimaryPlate = Template.bind({});
PrimaryPlate.args = {
    view: ContentView.PLATE,
};

export const DarkPlate = Template.bind({});
DarkPlate.args = {
    view: ContentView.PLATE,
};

DarkPlate.decorators = [ThemeDecorator(Theme.DARK)];
export const PrimaryList = Template.bind({});
PrimaryList.args = {
    view: ContentView.LIST,
};

export const DarkList = Template.bind({});
DarkList.args = {
    view: ContentView.LIST,
};

DarkList.decorators = [ThemeDecorator(Theme.DARK)];
