import { useState, useEffect } from 'react';
import { getReviews } from 'services/movies-api';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import { MoviesAbsenceView } from 'components/MoviesAbsenceView/MoviesAbsenceView';

import {
  ReviewsList,
  ReviewsBox,
  ReviewsInfo,
  ReviewsItem,
} from './ReviewsPage.styled';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        const result = await getReviews(id);

        setReviews(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();
  }, [id]);

  const elements = reviews.map(({ author, content, id }) => (
    <ReviewsItem key={id}>
      {author}
      <ReviewsInfo> {content}</ReviewsInfo>
    </ReviewsItem>
  ));

  return (
    <ReviewsBox>
      {loading && <Loader />}
      {error && <p>...error</p>}
      {reviews.length > 0 ? (
        <ReviewsList>{elements}</ReviewsList>
      ) : (
        <MoviesAbsenceView message="No review available yet" />
      )}
    </ReviewsBox>
  );
};

export default ReviewsPage;
