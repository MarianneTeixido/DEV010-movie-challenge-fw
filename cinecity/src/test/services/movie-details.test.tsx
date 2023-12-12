import { getDetails } from '../../services/movie-details'; // Ajusta la ruta según la estructura de tu proyecto
import { API_KEY } from '../../services/movie-request';

// Mockear la función global fetch para simular peticiones HTTP
global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ /* simulated data */ }),
}) as jest.MockedFunction<typeof global.fetch>;

test('getDetails fetches movie details with the correct URL and headers', async () => {
  const mockMovieId = 123; // Puedes ajustar el ID según tus necesidades

  // Llama a la función getDetails
  await getDetails(mockMovieId);

  // Verifica que fetch haya sido llamado con la URL y las opciones correctas
  expect(global.fetch).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/movie/${mockMovieId}?language=en-US`,
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
test('getDetails resolves with movie details on successful API call', async () => {
  const mockMovieId = 123;

  // Simula una respuesta exitosa de la API
  global.fetch.mockResolvedValueOnce({
    json: () => Promise.resolve({ /* datos simulados */ }),
  });

  // Verifica que la función getDetails resuelva con los detalles de la película
  await expect(getDetails(mockMovieId)).resolves.toEqual({ /* datos simulados */ });
});

test('getDetails rejects with an error on failed API call', async () => {
  const mockMovieId = 123;

  // Simula una respuesta de error de la API
  global.fetch.mockRejectedValueOnce(new Error('API error'));

  // Verifica que la función getDetails rechace con un error
  await expect(getDetails(mockMovieId)).rejects.toThrow('API error');
});
