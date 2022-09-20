import { render, screen } from '@testing-library/react';
import Banner from './Banner';


describe('Banner', () => {

    test('Title text should be present', () => {
        render(<Banner/>);
        const bannerTitle = screen.getAllByText(/Unit and Intregation Testing By Jestjs/i);
        expect(bannerTitle).toBeInTheDocument;
    });

    test('Should contain 2 images', () => {
        render(<Banner />);
        const headerLogo = screen.getAllByRole('img');
        expect(headerLogo.length).toBe(2);
    });

})