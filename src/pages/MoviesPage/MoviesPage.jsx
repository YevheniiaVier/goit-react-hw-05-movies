import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'Loader/Loader';
import { Box, Title } from './MoviesPage.styled';
import { MovieSearchForm } from 'components/MovieSearchForm/MovieSearchForm';
import { getMovieBySearch } from 'services/movies-api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovieBySearch(search);
        setMovies(prevState => [...prevState, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovies();
    }
  }, [search]);

  const handleSearch = search => {
    setMovies([]);
    setSearchParams({ search });
    console.log(search);
  };
  return (
    <Box>
      <Title>Movies</Title>
      <MovieSearchForm onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <p>...error</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Box>
  );
};

export default MoviesPage;
