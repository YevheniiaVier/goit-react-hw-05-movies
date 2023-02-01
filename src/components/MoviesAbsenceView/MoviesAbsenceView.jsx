import PropTypes from 'prop-types';

import errorImage from '../../images/noImages.png';
import {
  StyledBox,
  ErrorImage,
  ErrorMessage,
} from './MoviesAbsenceView.styled';

export const MoviesAbsenceView = ({ message }) => {
  return (
    <StyledBox>
      <ErrorMessage>{message}</ErrorMessage>
      <ErrorImage src={errorImage} alt="No images found" />
    </StyledBox>
  );
};

MoviesAbsenceView.propTypes = {
  message: PropTypes.string.isRequired,
};
