import { render, screen } from '@testing-library/react';
import Images from './Images';

describe('Image', () => {

    test('Should contain 2 images', () => {
        render(<Images/>);
        const image = screen.getAllByRole('img');
        expect(image.length).toBe(2);
    });

    
})