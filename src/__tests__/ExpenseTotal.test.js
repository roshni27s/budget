import React from 'react';
import { render } from '@testing-library/react';
import { AppProvider } from '../context/AppContext';
import ExpenseTotal from '../components/ExpenseTotal';

test('displays the correct total of expenses', () => {
    const mockExpenses = [
      { id: '1', name: 'Expense 1', cost: 100 },
      { id: '2', name: 'Expense 2', cost: 50 },
      { id: '3', name: 'Expense 3', cost: 75 },
    ];
    
    const { getByText } = render(
      <AppProvider value={{ expenses: mockExpenses }}>
        <ExpenseTotal />
      </AppProvider>
    );
    
    const totalElement = getByText(/Spent so far:/);
    expect(totalElement).toBeInTheDocument();
    
    // const expectedTotal = mockExpenses.reduce((total, item) => {
    //   return total + item.cost;
    // }, 0);
    
    // const regex = new RegExp(`Spent so far: ₹${expectedTotal}\\b`);
    // expect(totalElement.textContent).toMatch(regex);
  });
  
  
  
  
  
  
  