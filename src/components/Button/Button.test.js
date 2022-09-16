import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button',()=>{
    test('Button content should be present',()=>{
        render(<Button/>);
        const buttonName = screen.getAllByText(/Hello Button/i);
        expect(buttonName).toBeInTheDocument;
    })
})