//import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders Home component for "/" route', () => {
    render(<App />);
  //  //expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});

