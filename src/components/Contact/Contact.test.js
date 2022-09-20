import { render, screen } from '@testing-library/react';
import Contact from './Contact';


describe('Contact', () => {

    test('Should contain 7 images', () => {
        render(<Contact />);
        const contactImages = screen.getAllByRole('img');
        expect(contactImages.length).toBe(7);
    });

})