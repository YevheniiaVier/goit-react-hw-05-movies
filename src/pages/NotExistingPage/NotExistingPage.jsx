import { Box, Title, StyledLink as Link } from './NotExistingPage.styled.';

export const NotExistingPage = () => {
  return (
    <Box>
      <Title>Not Existing Page</Title>
      <Link to="/">To Home page</Link>
    </Box>
  );
};
