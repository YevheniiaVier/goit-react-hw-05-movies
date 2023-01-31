import {
  ReviewsList,
  ReviewsBox,
  ReviewsInfo,
  ReviewsItem,
} from './Reviews.styled';

export const Reviews = ({ movieReviews }) => {
  const elements = movieReviews.map(({ author, content, id }) => (
    <ReviewsItem key={id}>
      {author}
      <ReviewsInfo> {content}</ReviewsInfo>
    </ReviewsItem>
  ));
  return (
    <ReviewsBox>
      Reviews
      <ReviewsList>{elements}</ReviewsList>
    </ReviewsBox>
  );
};
