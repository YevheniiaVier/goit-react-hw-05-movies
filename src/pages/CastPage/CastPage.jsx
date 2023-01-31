import { useState, useEffect } from 'react';
import { getCast } from 'services/movies-api';
import { useParams, useNavigate } from 'react-router-dom';

import {
  CastBox,
  CastImg,
  CastInfo,
  CastCard,
  CastList,
} from './CastPage.styled';

import defaultImg from '../../images/default.png';

export const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  // const navigate = useNavigate();
  // const goBack = () => navigate(-1);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setLoading(true);

        const result = await getCast(id);
        setCast(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
    console.log('fetchCast', cast);
  }, []);

  const elements = cast.map(
    ({ id, name, original_name, profile_path, character }, index) => (
      <CastCard key={id + index}>
        <CastImg
          src={
            profile_path === null
              ? defaultImg
              : `https://image.tmdb.org/t/p/w300/${profile_path}`
          }
          alt={name ?? original_name}
          loading="lazy"
        />
        {name ?? original_name}

        <CastInfo>Character: {character}</CastInfo>
      </CastCard>
    )
  );
  return (
    <CastBox>
      Cast
      <CastList>{elements}</CastList>
    </CastBox>
  );
};

CastPage.defaultProps = {
  movies: [],
};