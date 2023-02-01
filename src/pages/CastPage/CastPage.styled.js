import styled from 'styled-components';

export const CastBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const CastInfo = styled.p`
  margin: 0;
`;

export const CastImg = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: auto;
  border-radius: 5px 5px 5px 5px;
`;

export const CastList = styled.ul`
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
  padding: 0;

  justify-content: space-around;
`;

export const CastCard = styled.li`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  justify-content: center;
  width: 220px;
`;
