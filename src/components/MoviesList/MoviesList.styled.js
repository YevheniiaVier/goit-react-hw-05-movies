import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const MovieCard = styled.li`
background-color: white;
overflow: hidden;
border-radius: 5px 5px 5px 5px;
transition: box-shadow 250ms linear;
width: 230px;
  padding: 10px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
&:hover,
&:focus {
cursor: pointer;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;}
}
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0;
`;

export const MovieTitle = styled.p`
  max-width: 336px;
  margin: 0;
  padding: 10px;
  color: ${p => p.theme.colors.accent};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.17;
`;

export const Poster = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: auto;
  border-radius: 5px 5px 5px 5px;
`;
