import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button',()=>{
    test('Button content should be present',()=>{
        render(<Button/>);
        const buttonName = screen.getByText("Hello");
        expect(buttonName).toBeInTheDocument;
    })

    test('Button render with a name' ,()=>{
        render(<Button title="shahriar" />);
        const buttonText = screen.getByText("Hello shahriar");
        expect(buttonText).toBeInTheDocument;
    })
})