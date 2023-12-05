import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = 'c6f8dac2683fdc0a0915476e424a8dca';
        const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

        const response = await axios.get(apiUrl, {
          params: {
            api_key: apiKey,
            with_genres: 'your_genre_id', // Replace 'your_genre_id' with the desired genre ID
          },
        });

        console.log(response.data);

        const fetchedMovies = response.data.results;

        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div>메인</div>
      <div>무비 테스트</div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            {movie.title}
          </li>
        ))}
      </ul>
      <div>컨텐츠</div>
    </>
  );
}
