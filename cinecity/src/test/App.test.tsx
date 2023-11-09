import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renderiza los componentes de App', () => {
  const { getByText } = render(<App />);
  
  const homeElement = getByText('Home'); 
  expect(homeElement).toBeInTheDocument();
});

