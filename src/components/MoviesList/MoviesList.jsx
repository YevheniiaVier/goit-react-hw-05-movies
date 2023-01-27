import { useState, useEffect } from 'react';

import { List, MovieLink, MovieCard } from './MoviesList.styled';
import { getMovies } from 'services/movies-api';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const result = await getMovies();
        setMovies(prevState => [...prevState, ...result]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
    console.log('fetch');
  }, []);

  const elements = movies.map(
    ({ id, title, name, original_title, original_name }, index) => (
      <MovieCard key={id + index}>
        <MovieLink to={`/movies/${id}`}>
          {title ?? name ?? original_title ?? original_name}
        </MovieLink>
      </MovieCard>
    )
  );
  //   console.log(movies);
  return (
    <>
      {loading && <p>...loading</p>}
      {error && <p>...error</p>}
      <List>{elements}</List>
    </>
  );
};
