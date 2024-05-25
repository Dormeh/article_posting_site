import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack } from './Stack';

export default {
    title: 'shared/Stack',
    component: Stack,
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const VerticalStackCentered = Template.bind({});
VerticalStackCentered.args = {
    direction: 'column',
    justify: 'center',
    align: 'center',
};

export const VerticalStackCenteredGap8 = Template.bind({});
VerticalStackCenteredGap8.args = {
    direction: 'column',
    justify: 'center',
    align: 'center',
    gap: 8,
};

export const VerticalStackCenteredGap16 = Template.bind({});
VerticalStackCenteredGap16.args = {
    direction: 'column',
    justify: 'center',
    align: 'center',
    gap: 16,
};

export const VerticalStackStart = Template.bind({});
VerticalStackStart.args = {
    direction: 'column',
    justify: 'start',
    align: 'start',
};

export const VerticalStackEnd = Template.bind({});
VerticalStackEnd.args = {
    direction: 'column',
    justify: 'end',
    align: 'end',
};

export const HorizontalStackCentered = Template.bind({});
HorizontalStackCentered.args = {
    direction: 'row',
    justify: 'center',
    align: 'center',
};

export const HorizontalStackCenteredGap8 = Template.bind({});
HorizontalStackCenteredGap8.args = {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gap: 8,
};

export const HorizontalStackCenteredGap16 = Template.bind({});
HorizontalStackCenteredGap16.args = {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gap: 16,
};

export const HorizontalStackStart = Template.bind({});
HorizontalStackStart.args = {
    direction: 'row',
    justify: 'start',
    align: 'start',
};

export const HorizontalStackEnd = Template.bind({});
HorizontalStackEnd.args = {
    direction: 'row',
    justify: 'end',
    align: 'end',
};
