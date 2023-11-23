import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    Button, ButtonDesign, ButtonSize, ButtonTheme,
} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const PrimaryDisable = Template.bind({});
PrimaryDisable.args = {
    children: 'Text',
    disabled: true,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
export const ClearDisable = Template.bind({});
ClearDisable.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
    disabled: true,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineWarn = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE_RED,
};
export const OutlineDisable = Template.bind({});
OutlineDisable.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    design: ButtonDesign.SQUARE,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    design: ButtonDesign.SQUARE,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    design: ButtonDesign.SQUARE,
};

export const Round = Template.bind({});
Round.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    design: ButtonDesign.ROUND,
};

export const RoundSizeL = Template.bind({});
RoundSizeL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    design: ButtonDesign.ROUND,
};

export const RoundSizeXl = Template.bind({});
RoundSizeXl.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    design: ButtonDesign.ROUND,
};
