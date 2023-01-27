import { Box, Title } from './MoviesPage.styled';
import { MovieSearchForm } from 'components/MovieSearchForm/MovieSearchForm';

export const MoviesPage = () => {
  return (
    <Box>
      <Title>Movies</Title>
      <MovieSearchForm />
    </Box>
  );
};
