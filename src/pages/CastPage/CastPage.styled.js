import styled from 'styled-components';

export const CastBox = styled.div`
  // padding-top: 100px;

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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 2%;
  justify-content: center;
  width: 220px;
`;
