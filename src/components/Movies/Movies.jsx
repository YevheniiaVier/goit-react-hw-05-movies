import { useState, useEffect } from 'react';

import { getMovies } from 'services/movies-api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Message, Wrapper } from './Movies.styled';
import { Loader } from 'Loader/Loader';

export const Movies = () => {
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

  return (
    <Wrapper>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && <Loader />}
      {error && <Message>...error</Message>}
    </Wrapper>
  );
};
