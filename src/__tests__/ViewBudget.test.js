import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ViewBudget from '../components/ViewBudget';

describe('ViewBudget', () => {
  test('renders budget and edit button', () => {
    const mockBudget = 1000;
    const mockHandleEditClick = jest.fn();

    render(<ViewBudget budget={mockBudget} handleEditClick={mockHandleEditClick} />);

    const budgetElement = screen.getByText(/Budget: ₹1000/);
    const editButtonElement = screen.getByRole('button', { name: 'Edit' });

    expect(budgetElement).toBeInTheDocument();
    expect(editButtonElement).toBeInTheDocument();

    fireEvent.click(editButtonElement);

    expect(mockHandleEditClick).toHaveBeenCalledTimes(1);
  });
});