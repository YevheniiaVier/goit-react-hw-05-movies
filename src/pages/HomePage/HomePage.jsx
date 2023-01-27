import { Box, Title } from './HomePage.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  return (
    <Box>
      <Title>Trending today</Title>
      <MoviesList />
    </Box>
  );
};
