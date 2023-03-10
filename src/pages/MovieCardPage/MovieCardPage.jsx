import PropTypes from 'prop-types';
import { Suspense } from 'react';

import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TfiControlBackward } from 'react-icons/tfi';

import { getMovieCard } from 'services/movies-api';
import { Loader } from 'components/Loader/Loader';
import { MoviesAbsenceView } from 'components/MoviesAbsenceView/MoviesAbsenceView';

import {
  Container,
  Box,
  Title,
  GoBackBtn,
  SubTitle,
  InfoBox,
  Info,
  Poster,
  PosterBox,
  MenuItem,
  MenuList,
  StyledLink as Link,
} from './MovieCardPage.styled';

const MovieCardPage = () => {
  const [movieCard, setMovieCard] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovieCard = async () => {
      try {
        setLoading(true);
        const result = await getMovieCard(id);
        setMovieCard(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCard();
  }, [id]);

  const {
    title,
    name,
    original_name,
    original_title,
    genres,
    vote_average,
    overview,
    poster_path,
  } = movieCard;

  const movieTitle = title ?? name ?? original_name ?? original_title ?? '';
  const movieGenres = genres ? genres.map(genre => genre.name) : '';
  const popularity = vote_average !== 0 ? vote_average : false;

  return (
    <Container>
      <GoBackBtn type="button" onClick={goBack}>
        <TfiControlBackward /> Go back
      </GoBackBtn>
      <Box>
        {loading && <Loader />}
        {!loading && error && (
          <MoviesAbsenceView
            message={'Sorry, information about this movie is not available'}
          />
        )}

        {poster_path && (
          <PosterBox>
            <Poster
              srcset={`https://image.tmdb.org/t/p/w300${poster_path}      300w,
                https://image.tmdb.org/t/p/w500${poster_path}      500w,
                https://image.tmdb.org/t/p/w780${poster_path}      780w,
                https://image.tmdb.org/t/p/w1280${poster_path}    1280w,
                https://image.tmdb.org/t/p/original${poster_path} 2000w
              `}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              sizes={`(min - width:1280px) 375px, (min-width:768px) 264px, 100vw`}
              alt={movieTitle}
            />
          </PosterBox>
        )}
        {Object.keys(movieCard).length !== 0 && (
          <InfoBox>
            <Title>{movieTitle}</Title>

            {popularity && (
              <Info>User Score: {vote_average.toFixed() * 10 + '%'}</Info>
            )}
            {overview && (
              <>
                <SubTitle>Overview</SubTitle>
                <Info>{overview}</Info>
              </>
            )}
            {movieGenres && (
              <>
                <SubTitle>Genres</SubTitle>
                <Info>{movieGenres.join(', ')}</Info>
              </>
            )}
          </InfoBox>
        )}
      </Box>
      {Object.keys(movieCard).length !== 0 && (
        <MenuList>
          <MenuItem>
            <Link state={{ from }} to={`/movies/${id}/cast`}>
              Cast
            </Link>
          </MenuItem>
          <MenuItem>
            <Link state={{ from }} to={`/movies/${id}/reviews`}>
              Reviews
            </Link>
          </MenuItem>
        </MenuList>
      )}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

MovieCardPage.propTypes = {
  movieCard: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    original_name: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};

export default MovieCardPage;
