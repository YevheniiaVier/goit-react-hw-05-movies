import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCard, getCast, getReviews } from 'services/movies-api';
import { Cast } from './Cast';
import {
  Box,
  Title,
  GoBackBtn,
  SubTitle,
  InfoBox,
  Info,
  Poster,
} from './MovieCardPage.styled';
import defaultImg from '../../defaultImg.jpg';

export const MovieCardPage = () => {
  const [movieCard, setMovieCard] = useState({});
  const [review, setReview] = useState({});
  const [cast, setCast] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

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
    console.log('fetchCard');
  }, [id]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const result = await getCast(id);
        // console.log(result);
        setCast(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovieCast();
    console.log('fetchCast');
  }, [id]);

  const {
    title,
    name,
    original_name,
    original_title,
    popularity,
    genres,
    vote_average,
    vote_count,
    overview,
    poster_path,
    id: movieId,
  } = movieCard;

  const movieTitle = title ?? name ?? original_name ?? original_title ?? '';
  const movieGenres = genres ? genres.map(genre => genre.name) : '';

  return (
    <Box>
      <GoBackBtn type="button" onClick={goBack}>
        Go back
      </GoBackBtn>
      <Poster
        srcset={
          poster_path === null
            ? defaultImg
            : `https://image.tmdb.org/t/p/w300/${poster_path}      300w,
    https://image.tmdb.org/t/p/w500/${poster_path}      500w,
    https://image.tmdb.org/t/p/w780/${poster_path}      780w,
    https://image.tmdb.org/t/p/w1280/${poster_path}    1280w,
    https://image.tmdb.org/t/p/original/${poster_path} 2000w
  `
        }
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        sizes={`(min - width:1280px) 375px, (min-width:768px) 264px, 100vw`}
        alt={movieTitle}
      />
      <Title>{movieTitle}</Title>
      <InfoBox>
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
      <Cast movieCast={cast} />
    </Box>
  );
};
