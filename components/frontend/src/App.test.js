import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';  
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import DarkModeToggle from './components/DarkMode/DarkMode';

jest.mock('axios');

describe('FizzBuzzBass Application', () => {
  
  test('renders FizzBuzzBassForm on the page load', () => {
    render(<App />);
    
    // Check if the main form is rendered
    expect(screen.getByPlaceholderText(/Enter a number/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  test('shows result after submitting a valid number', async () => {
    axios.post.mockResolvedValueOnce({ data: { result: 'Fizz' } });

    render(<App />);
    
    // Enter a valid number
    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), { target: { value: '3' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    
    // Check for loading state and result
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/Result: Fizz/i)).toBeInTheDocument();
    });
  });

  test('displays error message when API request fails', async () => {
    axios.post.mockRejectedValueOnce(new Error('Error: Could not process your request'));

    render(<App />);
    
    // Enter a valid number
    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), { target: { value: '5' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText(/Error: Could not process your request/i)).toBeInTheDocument();
    });
  });

  test('renders the Dark Mode button by default', () => {
    render(<DarkModeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Dark Mode');
  });

  test('toggles to Light Mode when clicked', () => {
    render(<DarkModeToggle />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toHaveTextContent('Light Mode');
    expect(document.documentElement.classList).toContain('dark');
  });
  
});
