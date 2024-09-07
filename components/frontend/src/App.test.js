import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FizzBuzzBassForm from './components/FizzBuzzBassForm/FizzBuzzBassForm';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

describe('FizzBuzzBassForm', () => {
  test('renders form elements correctly', () => {
    render(<FizzBuzzBassForm />);
    expect(screen.getByPlaceholderText(/Enter a number/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  test('displays result when valid number is submitted', async () => {
    axios.post.mockResolvedValueOnce({ data: { result: 'Fizz' } });

    render(<FizzBuzzBassForm />);
    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), { target: { value: '3' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Result: Fizz/i)).toBeInTheDocument();
    });
  });

  test('displays error message on failed request', async () => {
    axios.post.mockRejectedValueOnce(new Error('Error: Could not process your request'));

    render(<FizzBuzzBassForm />);
    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), { target: { value: '3' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Error: Could not process your request/i)).toBeInTheDocument();
    });
  });

  test('input field is focused on load', () => {
    render(<FizzBuzzBassForm />);
    const inputField = screen.getByPlaceholderText(/Enter a number/i);
    expect(inputField).toHaveFocus();
  });

  test('displays error for negative number input', async () => {
    axios.post.mockRejectedValueOnce({
      response: {
        data: {
          detail: [{ msg: "Value error, The number must be a positive integer" }]
        }
      }
    });

    render(<FizzBuzzBassForm />);
    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), { target: { value: '-1' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Value error, The number must be a positive integer/i)).toBeInTheDocument();
    });
  });

  test('displays error for zero input', async () => {
    axios.post.mockRejectedValueOnce({
      response: {
        data: {
          detail: [{ msg: "Value error, The number must be a positive integer" }]
        }
      }
    });

    render(<FizzBuzzBassForm />);
    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), { target: { value: '0' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Value error, The number must be a positive integer/i)).toBeInTheDocument();
    });
  });

  test('displays loading state when form is submitted', async () => {
    axios.post.mockResolvedValueOnce({ data: { result: 'Fizz' } });
  
    render(<FizzBuzzBassForm />);
    fireEvent.change(screen.getByPlaceholderText(/Enter a number/i), { target: { value: '3' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
  
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  
    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    });
  });
  
});
