import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Tabs } from './Tabs';

// export default {
//     title: 'shared/Tabs',
//     component: Tabs,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
//     args: {
//         tabsConfig: {
//             defaultCheckedValue: 'test2',
//             name: 'testTab',
//             tabOptions: [
//                 {
//                     value: 'test1',
//                 },
//                 {
//                     value: 'test2',
//                 },
//                 {
//                     value: 'test3',
//                 },
//             ],
//         },
//     },
// } as ComponentMeta<typeof Tabs>;
//
// const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
//
// Dark.decorators = [ThemeDecorator(Theme.DARK)];
