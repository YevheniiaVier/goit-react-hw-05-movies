import { Box, List, Item, Link } from './MainNav.styled';

export const MainMenu = () => {
  return (
    <Box>
      <List>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/movies">Movies</Link>
        </Item>
      </List>
    </Box>
  );
};
