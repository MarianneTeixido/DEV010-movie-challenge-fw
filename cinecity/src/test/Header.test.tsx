import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header/Header';


test('Header renders with logo image', () => {
    const { getByAltText } = render(<Header />);
    const logoImage = getByAltText('CineCity') as HTMLImageElement;
    expect(logoImage).toBeDefined();
    expect(logoImage.src).toContain('/assets/logo.png'); 
});


describe('Examples', () => {
it('should be a teapot', () => {
});
});

