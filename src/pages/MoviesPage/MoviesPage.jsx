import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { Loader } from 'Loader/Loader';
import { Box, Title } from './MoviesPage.styled';
import { MovieSearchForm } from 'components/MovieSearchForm/MovieSearchForm';
import { getMovieBySearch } from 'services/movies-api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Button } from 'components/Button/Button';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovieBySearch(search, page);
        setMovies(prevState => [...prevState, ...data.results]);
        setShowButton(true);
        if (data.results.length === 0) {
          setMovies([]);
          setShowButton(false);
          onSearchError(search);
        }
        if (page === data.total_pages) {
          setShowButton(false);
          onSearchEndNotice();
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
      {error && <p>{error.message}</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {showButton && (
        <Button type="button" text="Load more" onClick={loadMore} />
      )}
      <ToastContainer autoClose={2000} />
    </Box>
  );
};

export default MoviesPage;

function onSearchEndNotice() {
  return toast.warn(
    `We're sorry, but you've reached the end of search results.`,
    {
      theme: 'colored',
      pauseOnHover: true,
    }
  );
}
function onSearchError(searchQuery) {
  return Promise.reject(
    new Error(`No results for ${searchQuery}. Please try something else`)
  );
}
