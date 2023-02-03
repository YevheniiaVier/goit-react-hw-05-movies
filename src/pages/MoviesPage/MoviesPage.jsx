import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { Box, SearchEndMessage } from './MoviesPage.styled';
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
  const [searchEnd, setSearchEnd] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setShowButton(false);
        setLoading(true);
        const pagesData = [];
        let totalPages;
        // decided to reload all pages data to show all pages after GOBACK
        for (let i = 1; i <= page; i += 1) {
          const { results, total_pages } = await getMovieBySearch(search, i);
          pagesData.push(...results);
          totalPages = total_pages;
        }
        setMovies(pagesData);

        setShowButton(true);
        if (page === totalPages) {
          setShowButton(false);
          setSearchEnd(
            `We're sorry, but you've reached the end of search results.`
          );
        }
        if (pagesData.length === 0) {
          setMovies([]);
          setShowButton(false);
          throw new Error(
            `No results for ${search}. Please try something else`
          );
        }
      } catch (error) {
        console.group(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovies();
    }
  }, [search, page]);

  useEffect(() => {
    if (movies.length > 20 && page !== 1) {
      onSmoothScroll();
    }
  }, [movies, page]);

  const handleSearch = searchText => {
    if (search === searchText) {
      return;
    }
    setMovies([]);
    setSearchParams({ search: searchText, page: 1 });
    setSearchEnd('');
    setError(null);
  };
  const loadMore = () => {
    setSearchParams({ search, page: Number(page) + 1 });
  };

  return (
    <Box>
      <MovieSearchForm onSubmit={handleSearch} />
      {error && <MoviesAbsenceView message={error.message} />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {showButton && (
        <Button type="button" text="Load more" onClick={loadMore} />
      )}
      {loading && <Loader />}

      {!showButton && searchEnd && (
        <SearchEndMessage>{searchEnd}</SearchEndMessage>
      )}
    </Box>
  );
};

MoviesPage.defaultProps = {
  movies: [],
};

MoviesPage.propTypes = {
  movies: PropTypes.array.isRequired,
};

function onSmoothScroll() {
  const { height: cardHeight } = document
    .querySelector('#gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 1,
    behavior: 'smooth',
  });
}

export default MoviesPage;
