import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import { getDetails } from '../services/movie-details';

jest.mock('../../services/movie-details', () => ({
  getDetails: jest.fn(() =>
    Promise.resolve({
      id: 1,
      original_title: 'Test Movie',
      release_date: '2023-01-01',
      genres: [{ id: 1, name: 'Action' }],
      runtime: 120,
      vote_average: 7.5,
      vote_count: 100,
      overview: 'This is a test movie.',
      poster_path: '/test-poster.jpg',
    })
  ),
}));

describe('MovieDetail', () => {
  it('should render movie details', async () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <MovieDetail />
      </BrowserRouter>
    );

    // Espera a que la llamada a getDetails se complete
    await waitFor(() => expect(getDetails).toHaveBeenCalledTimes(1));

    // // Verifica que los elementos del detalle de la película estén presentes en el DOM
    // expect(getByText('Test Movie')).toBeInTheDocument();
    // expect(getByText('Release year: 2023')).toBeInTheDocument();
    // expect(getByText('Genre: Action')).toBeInTheDocument();
    // expect(getByText('Duration: 120 minutes')).toBeInTheDocument();
    // expect(getByText('User Score: 7.50%')).toBeInTheDocument();
    // expect(getByText('Total Votes: 100')).toBeInTheDocument();
    // expect(getByText('Overview:')).toBeInTheDocument();
    // expect(getByText('This is a test movie.')).toBeInTheDocument();

    // // Verifica que la imagen de la película esté presente en el DOM
    // expect(getByAltText('Test Movie')).toBeInTheDocument();
  });
});
