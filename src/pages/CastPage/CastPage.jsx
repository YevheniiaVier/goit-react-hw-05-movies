import { useState, useEffect } from 'react';
import { getCast } from 'services/movies-api';
import { useParams } from 'react-router-dom';
import { Loader } from 'Loader/Loader';
import {
  CastBox,
  CastImg,
  CastInfo,
  CastCard,
  CastList,
} from './CastPage.styled';

import defaultImg from '../../images/default.png';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

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
  }, [id]);

  const elements = cast.map(
    ({ id, name, original_name, profile_path, character }, index) => (
      <CastCard key={id + name + index}>
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
      {loading && <Loader />}
      {error && <p>...error</p>}
      <CastList>{elements}</CastList>
    </CastBox>
  );
};

CastPage.defaultProps = {
  movies: [],
};

export default CastPage;
