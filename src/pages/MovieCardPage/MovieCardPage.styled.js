import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  border-radius: 10rem;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.grey};
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bolder};
  transition: all 300ms 100ms;
  &.active {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentDark};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accentDark};
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
`;

export const MenuItem = styled.li`
  font-weight: 500;
  font-size: 20px;
  color: ${p => p.theme.colors.primary};
`;

export const Box = styled.div`
  justify-content: center;
  padding: ${p => p.theme.space[6]}px;
  margin-top: 40px;
  gap: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media screen and (min-width: 600px) {
    display: flex;
  }
`;
export const PosterBox = styled.div`
  margin-bottom: 40px;
  border-radius: 3%;
  overflow: hidden;
  @media screen and (min-width: 600px) {
    min-width: 300px;
  }
`;

export const Container = styled.div`
  padding-top: 100px;
`;
export const Title = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 25px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 20px;
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
  text-align: justify;
`;
export const Info = styled.p`
  margin: 0;

  font-weight: normal;
  font-size: 18px;
  line-height: 1.66;
  color: #000000;
`;

export const GoBackBtn = styled.button`
  align-items: center;
  width: 120px;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #0cf 0,
    rgb(8, 157, 194) 100%
  );
  border: 0;
  border-radius: 20px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px;
  box-sizing: border-box;
  color: ${p => p.theme.colors.primary}
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
  &:hover {
    color: ${p => p.theme.colors.white};
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #rgb(8, 157, 194) 0 -3px 0 inset;
  }
  transition: all 300ms 100ms;
`;

export const Poster = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
`;
