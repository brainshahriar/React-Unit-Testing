import { render, screen } from '@testing-library/react';
import ComponentTest from './ComponentTest';

describe('Component',()=>{
    test('Button content should be present',()=>{
        render(<ComponentTest/>);
        const buttonName = screen.getAllByText(/Button/i);
        expect(buttonName).toBeInTheDocument;
    })
})