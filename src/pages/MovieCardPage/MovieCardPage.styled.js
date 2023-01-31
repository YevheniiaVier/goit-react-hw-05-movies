import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)``;
export const MenuList = styled.ul``;
export const MenuItem = styled.li``;

export const Box = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 20px;
`;
export const PosterBox = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
  color: #000000;
  text-transform: uppercase;
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
  margin: 0;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.66;
  color: #000000;
`;

export const GoBackBtn = styled.button`
  align-items: center;
  width: 120px;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  gap: 5px;
  font-family: 'JetBrains Mono', monospace;
  height: 40px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  &:hover,
  &:focus {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }
  transition: background-color 300ms 100ms;
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
