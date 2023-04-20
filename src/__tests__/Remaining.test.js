import React from 'react';
import { render } from '@testing-library/react';
import { AppContext } from '../context/AppContext';
import RemainingBudget from '../components/Remaining';

test('displays remaining budget', () => {
  const expenses = [
    { id: 1, name: 'Test Expense 1', cost: 200 },
    { id: 2, name: 'Test Expense 2', cost: 300 },
  ];
  const budget = 1000;
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
  const remainingBudget = budget - totalExpenses;

  const { getByText } = render(
    <AppContext.Provider value={{ expenses, budget }}>
      <RemainingBudget />
    </AppContext.Provider>
  );

  expect(getByText(`Remaining: ₹${remainingBudget}`)).toBeInTheDocument();
});



