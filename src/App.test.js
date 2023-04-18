import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const appElement = screen.getByText(/Budget/);
  expect(appElement.textContent).toEqual('Budget');
});
