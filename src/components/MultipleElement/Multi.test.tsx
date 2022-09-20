import { render, screen } from '@testing-library/react';
import React from 'react';
import Multi from './Multi';

describe('Multi', () => {
    const multi = ["HTML","CSS","JAVASCRIPT"];
    test('renders correctly', () => {
        render(<Multi multi={multi} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test('renders a list correctly', () => {
        render(<Multi multi={multi} />);
        const listElements = screen.getAllByRole('listitem');
        expect(listElements).toHaveLength(multi.length);
    });
});