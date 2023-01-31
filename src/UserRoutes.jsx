import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { NotExistingPage } from 'pages/NotExistingPage/NotExistingPage';
import { MovieCardPage } from 'pages/MovieCardPage/MovieCardPage';
import { CastPage } from 'pages/CastPage/CastPage';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieCardPage />}>
        <Route path="/movies/:id/credits" element={<CastPage />} />
      </Route>

      <Route path="*" element={<NotExistingPage />} />
    </Routes>
  );
};
