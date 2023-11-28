import { getGenres } from '../../services/genres-request'; // Ajusta la ruta según la estructura de tu proyecto
import { API_KEY } from '../../services/movie-request';

// Mockear la función global fetch para simular peticiones HTTP
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ genres: [{ id: 1, name: 'Action' }] }), // Datos simulados
    }) as Promise<Response>
);

test('getGenres fetches genres with the correct URL and headers', async () => {
  const mockGenreId = 28; // Puedes ajustar el ID según tus necesidades

  // Llama a la función getGenres
  await getGenres(mockGenreId);

  // Verifica que fetch haya sido llamado con la URL y las opciones correctas
  expect(global.fetch).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/genre/movie/list?language=en-US&with_genres=${mockGenreId}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    }
  );
});

// También puedes escribir pruebas adicionales para manejar casos de éxito y error en la respuesta de la API.
test('getGenres resolves with genres on successful API call', async () => {
  const mockGenreId = 28;

  // Simula una respuesta exitosa de la API
  global.fetch.mockResolvedValueOnce({
    json: () => Promise.resolve({ genres: [{ id: 1, name: 'Action' }] }), // Datos simulados
  });

  // Verifica que la función getGenres resuelva con los géneros
  await expect(getGenres(mockGenreId)).resolves.toEqual([{ id: 1, name: 'Action' }]); // Ajusta según tus datos simulados
});

test('getGenres rejects with an error on failed API call', async () => {
  const mockGenreId = 28;

  // Simula una respuesta de error de la API
  global.fetch.mockRejectedValueOnce(new Error('API error'));

  // Verifica que la función getGenres rechace con un error
  await expect(getGenres(mockGenreId)).rejects.toThrow('API error');
});
