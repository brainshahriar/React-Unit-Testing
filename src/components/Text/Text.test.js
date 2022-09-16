import { render, screen } from '@testing-library/react';
import Text from './Text';


describe('Text', () => {

    test('Title text should be present', () => {
        render(<Text/>);
        const Texts = screen.getAllByText(/Hello Everyone/i);
        expect(Texts).toBeInTheDocument;
    });

})