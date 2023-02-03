import { Box, Title } from './HomePage.styled';
import { Movies } from 'components/Movies/Movies';

const HomePage = () => {
  return (
    <Box>
      <Title>Trending today</Title>
      <Movies />
    </Box>
  );
};

export default HomePage;
