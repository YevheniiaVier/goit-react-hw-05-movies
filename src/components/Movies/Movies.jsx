import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovies } from 'services/movies-api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Message, Wrapper } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [totalPages, setTotalPages] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { results, total_pages } = await getMovies(page);
        setMovies([...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();

    console.log('fetch');
  }, [page]);
  const onPageChange = currentPage => {
    if (page === currentPage) {
      return;
    }
    setSearchParams({ page: currentPage });
  };

  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <Message>{error.message}</Message>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      <Pagination
        currentPage={Number(page)}
        totalPagesCount={totalPages}
        onPageChange={page => onPageChange(page)}
      />
    </Wrapper>
  );
};
