import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const NotExistingPage = lazy(() =>
  import('pages/NotExistingPage/NotExistingPage')
);
const MovieCardPage = lazy(() => import('pages/MovieCardPage/MovieCardPage'));
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

export const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieCardPage />}>
          <Route path="credits" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotExistingPage />} />
      </Routes>
    </Suspense>
  );
};