import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FizzBuzzBassForm from '../components/FizzBuzzBassForm/FizzBuzzBassForm.jsx';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

describe('FizzBuzzBassForm API Interactions', () => {
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
});
