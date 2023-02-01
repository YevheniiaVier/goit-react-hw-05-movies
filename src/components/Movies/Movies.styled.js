import styled from 'styled-components';

export const Message = styled.p`
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bolder};
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
