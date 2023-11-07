import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header/Header';


describe('Header', () => {
  it('should render correctly', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.logo-div')).toBeInTheDocument();
    expect(container.querySelector('.banner-div')).toBeInTheDocument();
  });

  it('should render logo', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('CineCity')).toBeInTheDocument();
  });

  it('should render correct number of circles', () => {
    const { container } = render(<Header />);
    const circles = container.querySelectorAll('.circle');
    expect(circles.length).toBe(70); // adjust this number based on how many circles you expect
  });
});