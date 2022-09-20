import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';


describe('Form', () => {

    test('Render correctly', () => {
        render(<Form />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toBeInTheDocument();

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();

        const labelElement = screen.getByLabelText("Email");
        expect(labelElement).toBeInTheDocument();

        const placeholderElement = screen.getByPlaceholderText("Input");
        expect(placeholderElement).toBeInTheDocument();

        
        const valueElement = screen.getByDisplayValue("shahriar");
        expect(valueElement).toBeInTheDocument();

                
        const idElement = screen.getByTestId("custom-id");
        expect(idElement).toBeInTheDocument();
    });

})