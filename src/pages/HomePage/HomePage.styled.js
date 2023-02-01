import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[7]}px;
  margin: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
