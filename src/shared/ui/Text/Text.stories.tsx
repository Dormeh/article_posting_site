import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
export const PrimaryL = Template.bind({});

PrimaryL.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
    size: TextSize.L,
};
export const PrimaryM = Template.bind({});
PrimaryM.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
};
export const PrimaryS = Template.bind({});

PrimaryS.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
    size: TextSize.S,
};
export const PrimaryXS = Template.bind({});

PrimaryXS.args = {
    title: 'Title lorem ipsum',
    text: 'Description Description Description Description',
    size: TextSize.XS,
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsun',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description Description Description Description',
};

export const PrimaryDarkL = Template.bind({});
PrimaryDarkL.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.L,
};
PrimaryDarkL.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkM = Template.bind({});
PrimaryDarkM.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};
PrimaryDarkM.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkS = Template.bind({});
PrimaryDarkS.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.S,
};
PrimaryDarkS.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkXS = Template.bind({});
PrimaryDarkXS.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.XS,
};
PrimaryDarkXS.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
