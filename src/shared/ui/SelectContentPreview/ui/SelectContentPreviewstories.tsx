import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ContentView } from 'shared/model/consts/common';
import { SelectContentPreview } from './SelectContentPreview';

export default {
    title: '.../SelectPageTypePreview',
    component: SelectContentPreview,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // args: {
    //     selects: [
    //         {
    //             Icon: ,
    //             view: ContentView.PLATE
    //         },
    //         {
    //             Icon: ,
    //             view: ContentView.LIST
    //         }
    //     ]
    // }
} as ComponentMeta<typeof SelectContentPreview>;

const Template: ComponentStory<typeof SelectContentPreview> = (args) => (
    <SelectContentPreview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
