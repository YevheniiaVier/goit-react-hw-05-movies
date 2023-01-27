import { Route, Routes } from 'react-router-dom';

import { MainMenu } from 'components/MainNav/MainNav';

import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { NotExistingPage } from 'pages/NotExistingPage/NotExistingPage';
import { MovieCardPage } from 'pages/MovieCardPage/MovieCardPage';

export const App = () => {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieCardPage />} />
        <Route path="*" element={<NotExistingPage />} />
      </Routes>
    </div>
  );
};
