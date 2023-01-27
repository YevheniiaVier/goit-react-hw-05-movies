import { Box, List, Item, Link } from './MainNav.styled';
import navItems from './items';

export const MainNav = () => {
  const elements = navItems.map(({ id, to, text }) => (
    <Item key={id}>
      <Link to={to}>{text}</Link>
    </Item>
  ));
  return (
    <Box>
      <List>{elements}</List>
    </Box>
  );
};
