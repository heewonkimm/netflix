import { useEffect, useState } from 'react';
import { API_URL } from '../../lib/api';

export default function MainPage(): JSX.Element {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await API_URL.get('/popular');

        const fetchedMovies = data.results;
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('에러다에러', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {movies.length > 0 && <div>{movies[0].title}</div>}
      {movies[0].poster_path && <img src={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`} alt={movies[0].title} />}
      <div>컨텐츠</div>
    </>
  );
}
{
  /* <ul>
        {movies.length > 0 && (
          <li key={movies[0].id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movies[0].poster_path}`} alt={movies[0].title} />
            {movies[0].id}
          </li>
        )}
      </ul> */
}
