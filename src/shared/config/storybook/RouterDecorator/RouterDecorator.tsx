import { Story } from '@storybook/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => <BrowserRouter>{story()}</BrowserRouter>;
