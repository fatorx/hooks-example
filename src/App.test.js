import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders button count', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/You clicked count/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders button points', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/You clicked points/i);
  expect(linkElement).toBeInTheDocument();
});