import { MainNav } from 'components/MainNav/MainNav';
import { UserRoutes } from 'UserRoutes';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <MainNav />
      <UserRoutes />
    </Container>
  );
};
