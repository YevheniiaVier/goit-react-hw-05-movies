import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  padding: ${p => p.theme.space[3]}px;
  justify-content: center;
  //   color: ${p => p.theme.colors.primary};
  //   margin: ${p => p.theme.space[0]}px;
  //   margin-bottom: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;

  //   padding: ${p => p.theme.space[0]}px;
  //   color: ${p => p.theme.colors.primary};
  //   margin: ${p => p.theme.space[0]}px;
  //   margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  &.active {
    background-color: ${p => p.theme.colors.offline};
  }
`;
