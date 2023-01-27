import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCard } from 'services/movies-api';
import { Box, Title, GoBackBtn } from './MovieCardPage.styled';

export const MovieCardPage = () => {
  const [movieCard, setMovieCard] = useState({});
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

  const { title } = movieCard;
  return (
    <Box>
      <GoBackBtn type="button" onClick={goBack}>
        Go back
      </GoBackBtn>
      <Title>{title}</Title>
    </Box>
  );
};
