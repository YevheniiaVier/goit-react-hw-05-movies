import { MainNav } from 'components/MainNav/MainNav';
import { UserRoutes } from 'UserRoutes';

export const App = () => {
  return (
    <div>
      <MainNav />
      <UserRoutes />
    </div>
  );
};
