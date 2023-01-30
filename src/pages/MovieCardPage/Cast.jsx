import { CastBox, CastImg, CastInfo, CastCard, CastList } from './Cast.styled';

import defaultImg from '../../defaultImg.jpg';

export const Cast = ({ movieCast }) => {
  const elements = movieCast.map(
    ({ id, name, original_name, profile_path, character }) => (
      <CastCard key={id}>
        {' '}
        {name ?? original_name}
        <CastImg
          src={
            profile_path === null
              ? defaultImg
              : `https://image.tmdb.org/t/p/w300/${profile_path}`
          }
          alt={name ?? original_name}
          loading="lazy"
        />
        <CastInfo>Character: {character}</CastInfo>
      </CastCard>
    )
  );
  return (
    <CastBox>
      <CastList>{elements}</CastList>
    </CastBox>
  );
};

Cast.defaultProps = {
  movies: [],
};
