// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DevZen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DevZen/i);
    expect(titleElement).toBeInTheDocument();
});
