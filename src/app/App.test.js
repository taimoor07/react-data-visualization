import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Hello Reactjs', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Reactjs/i);
  expect(linkElement).toBeInTheDocument();
});
