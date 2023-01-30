import styled from 'styled-components';

export const Box = styled.div``;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 20px;
  @media screen and (min-width: 1280px) {
    font-size: 30px;
  }
`;
export const SubTitle = styled.h3`
  text-transform: uppercase;
`;

export const InfoBox = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  color: #000000;
`;
export const Info = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.66;
  color: #000000;
`;

export const GoBackBtn = styled.button`
  width: 110px;
  height: 44px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
`;

export const Poster = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 374px;
    width: 264px;
    object-fit: cover;
  }
  @media screen and (min-width: 1280px) {
    height: 478px;
    width: 375px;
    object-fit: cover;
  }
`;
