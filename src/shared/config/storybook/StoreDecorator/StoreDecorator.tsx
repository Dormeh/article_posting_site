import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (initialState: StateSchema) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState}>
        <StoryComponent />
    </StoreProvider>

);
