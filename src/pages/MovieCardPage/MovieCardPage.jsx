import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { getMovieCard, getReviews } from 'services/movies-api';
// import { CastPage } from '../CastPage/CastPage';
// import { Reviews } from './Reviews';
import {
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
import defaultImg from '../../images/default.png';
// import goBackIcon from '../../images/go-back-icon.png';

const MovieCardPage = () => {
  const [movieCard, setMovieCard] = useState({});
  //   const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';

  //   console.log('location', location);
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovieCard = async () => {
      setLoading(true);
      try {
        const result = await getMovieCard(id);
        setMovieCard(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCard();
    // console.log('fetchCard');
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
  const poster = poster_path ?? defaultImg;
  return (
    <>
      <GoBackBtn type="button" onClick={goBack}>
        <RiArrowGoBackFill /> Go back
      </GoBackBtn>
      <Box>
        <PosterBox>
          <Poster
            // srcset={`https://image.tmdb.org/t/p/w300/${poster_path}      300w,
            //     https://image.tmdb.org/t/p/w500/${poster_path}      500w,
            //     https://image.tmdb.org/t/p/w780/${poster_path}      780w,
            //     https://image.tmdb.org/t/p/w1280/${poster_path}    1280w,
            //     https://image.tmdb.org/t/p/original/${poster_path} 2000w
            //   `}
            src={`https://image.tmdb.org/t/p/w1280${poster}`}
            // sizes={`(min - width:1280px) 375px, (min-width:768px) 264px, 100vw`}
            alt={movieTitle}
          />
        </PosterBox>
        <InfoBox>
          <Title>{movieTitle}</Title>

          {vote_average && (
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
      </Box>
      <MenuList>
        <MenuItem>
          <Link state={{ from }} to={`/movies/${id}/credits`}>
            Cast
          </Link>
        </MenuItem>
        <MenuItem>
          <Link state={{ from }} to={`/movies/${id}/reviews`}>
            Reviews
          </Link>
        </MenuItem>
      </MenuList>
      <Outlet />
    </>
  );
};

export default MovieCardPage;
