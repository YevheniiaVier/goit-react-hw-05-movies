import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotExistingPage from 'pages/NotExistingPage/NotExistingPage';
import MovieCardPage from 'pages/MovieCardPage/MovieCardPage';
import CastPage from 'pages/CastPage/CastPage';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieCardPage />}>
        <Route path="credits" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Route>
      <Route path="*" element={<NotExistingPage />} />
    </Routes>
  );
};

// import { lazy, Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';

// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
// const NotExistingPage = lazy(() =>
//   import('pages/NotExistingPage/NotExistingPage')
// );
// const MovieCardPage = lazy(() => import('pages/MovieCardPage/MovieCardPage'));
// const CastPage = lazy(() => import('pages/CastPage/CastPage'));
// const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

// export const UserRoutes = () => {
//   return (
//     <Suspense fallback={<p>...loading</p>}>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/movies" element={<MoviesPage />} />
//         <Route path="/movies/:id" element={<MovieCardPage />}>
//           <Route path="credits" element={<CastPage />} />
//           <Route path="reviews" element={<ReviewsPage />} />
//         </Route>
//         <Route path="*" element={<NotExistingPage />} />
//       </Routes>
//     </Suspense>
//   );
// };
