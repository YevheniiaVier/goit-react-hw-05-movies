import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCard } from 'services/movies-api';
import { Box, Title } from './MovieCardPage.styled';

export const MovieCardPage = () => {
  const [movieCard, setMovieCard] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

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
      <Title>{title}</Title>
    </Box>
  );
};
