import {
  List,
  MovieLink,
  MovieCard,
  Poster,
  MovieTitle,
} from './MoviesList.styled';
import defaultImg from '../../defaultImg.jpg';

export const MoviesList = ({ movies }) => {
  const elements = movies.map(
    (
      { id, title, name, original_title, original_name, poster_path },
      index
    ) => (
      <MovieCard key={id + index}>
        <MovieLink to={`/movies/${id}`}>
          <Poster
            src={
              poster_path === null
                ? defaultImg
                : `https://image.tmdb.org/t/p/w300/${poster_path}`
            }
            alt={title ?? name ?? original_title ?? original_name}
            loading="lazy"
          />
          <MovieTitle>
            {title ?? name ?? original_title ?? original_name}
          </MovieTitle>
        </MovieLink>
      </MovieCard>
    )
  );
  //   console.log(movies);
  return <List>{elements}</List>;
};

MoviesList.defaultProps = {
  movies: [],
};
