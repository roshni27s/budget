import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddExpenseForm from '../components/AddExpenseForm';

test('typing into input and displaying todo', () => {
    render(<AddExpenseForm/>);
    const appElement = screen.getByText(/Name/);
    expect(appElement.textContent).toEqual('Name');
    // const inputElement = screen.getByPlaceholderText(/Write name/i);
    // const inputElement2 = screen.getByPlaceholderText(/Write cost/i);
    // const buttonElement = screen.getByRole('button', { name: /Save/i });
    // fireEvent.change(inputElement, { target: { value: 'food' } });
    // fireEvent.change(inputElement2, { target: { value: '100' } });
    // fireEvent.click(buttonElement);
    // // const todoElement = screen.getByText(/Send a mail to Dad/i);
    // expect(inputElement.value).not.toEqual('');
    // expect(inputElement2.value).not.toEqual('');
});

