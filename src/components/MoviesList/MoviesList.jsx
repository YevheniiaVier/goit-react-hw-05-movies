import { useLocation } from 'react-router-dom';

import {
  List,
  MovieLink,
  MovieCard,
  Poster,
  MovieTitle,
} from './MoviesList.styled';
import defaultImg from '../../images/default.png';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  //   console.log('location list', location);
  const elements = movies.map(
    (
      { id, title, name, original_title, original_name, poster_path },
      index
    ) => (
      <MovieCard key={id + index}>
        <MovieLink state={{ from: location }} to={`/movies/${id}`}>
          <Poster
            src={
              poster_path === null
                ? defaultImg
                : `https://image.tmdb.org/t/p/w1280/${poster_path}`
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
