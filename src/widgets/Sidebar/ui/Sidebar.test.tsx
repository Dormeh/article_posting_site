import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggle = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
