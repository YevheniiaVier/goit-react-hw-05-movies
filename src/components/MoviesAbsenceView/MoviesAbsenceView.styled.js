import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ErrorMessage = styled.p`
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const ErrorImage = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 260px;
`;
