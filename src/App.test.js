import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const generateRandomEmail = () => {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `user_${randomString}@example.com`;
};

const generateRandomPassword = () => {
  return Math.random().toString(36).substring(2, 10);
};

test('renders login form and handles input', () => {
  render(<App />);
  
  const titleElement = screen.getByText(/Connexion/i);
  expect(titleElement).toBeInTheDocument();
  
  const emailInput = screen.getByLabelText(/Email:/i);
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute('type', 'email');
  const randomEmail = generateRandomEmail();
  fireEvent.change(emailInput, { target: { value: randomEmail } });
  expect(emailInput).toHaveValue(randomEmail);
  
  const passwordInput = screen.getByLabelText(/Mot de passe:/i);
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute('type', 'password');
  const randomPassword = generateRandomPassword();
  fireEvent.change(passwordInput, { target: { value: randomPassword } });
  expect(passwordInput).toHaveValue(randomPassword);
  
  const submitButton = screen.getByText(/Se connecter/i);
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toHaveAttribute('type', 'submit');
  
  fireEvent.click(submitButton);
});