import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { Box, Title, SearchEndMessage } from './MoviesPage.styled';
import { MovieSearchForm } from 'components/MovieSearchForm/MovieSearchForm';
import { getMovieBySearch } from 'services/movies-api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Button } from 'components/Button/Button';
import { MoviesAbsenceView } from 'components/MoviesAbsenceView/MoviesAbsenceView';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1);
  const [searchEnd, setSearchEnd] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovieBySearch(search, page);
        setMovies(prevState => [...prevState, ...data.results]);
        setShowButton(true);
        if (page === data.total_pages) {
          setShowButton(false);
          setSearchEnd(
            `We're sorry, but you've reached the end of search results.`
          );
        }
        if (data.results.length === 0) {
          setMovies([]);
          setShowButton(false);
          throw new Error(
            `No results for ${search}. Please try something else`
          );
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovies();
    }
  }, [search, page]);

  const handleSearch = search => {
    setMovies([]);
    setSearchParams({ search });
    setPage(1);
    setSearchEnd('');
    console.log(search);
  };
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };
  return (
    <Box>
      <Title>Movies</Title>
      <MovieSearchForm onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <MoviesAbsenceView message={error.message} />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {showButton && (
        <Button type="button" text="Load more" onClick={loadMore} />
      )}
      {searchEnd && <SearchEndMessage>{searchEnd}</SearchEndMessage>}
    </Box>
  );
};

export default MoviesPage;
