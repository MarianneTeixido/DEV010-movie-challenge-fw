import { buildApiUrl } from '../../services/movie-request';
import { API_KEY } from '../../services/movie-request';

test('API_KEY is defined and has the correct format', () => {
  expect(API_KEY).toBeDefined();
  expect(API_KEY).toMatch(/^Bearer [a-zA-Z0-9-._~+/]+$/);
});

test('buildApiUrl generates correct URL', () => {
  const page = 1;
  const genre = 28;
  const sortBy = 'popularity.desc';

  const apiUrl = buildApiUrl(page, genre, sortBy);

  expect(apiUrl).toBe(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sortBy}&with_genres=${genre}`);
});
