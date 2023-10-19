import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (initialState: StateSchema = {
    user: {},
    loginForm: { error: undefined, authData: undefined, isLoading: false },
    counter: { value: 0 },
}) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState}>
        <StoryComponent />
    </StoreProvider>

);
