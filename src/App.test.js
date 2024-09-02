import React from 'react';
   import { render, screen } from '@testing-library/react';
   import App from './App';

   test('renders login form', () => {
     render(<App />);
     const titleElement = screen.getByText(/Connexion/i);
     expect(titleElement).toBeInTheDocument();
     
     const emailInput = screen.getByLabelText(/Email:/i);
     expect(emailInput).toBeInTheDocument();
     
     const passwordInput = screen.getByLabelText(/Mot de passe:/i);
     expect(passwordInput).toBeInTheDocument();
     
     const submitButton = screen.getByText(/Se connecter/i);
     expect(submitButton).toBeInTheDocument();
   });