import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  //   flex-direction: column;
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
&:hover,
&:focus {
cursor: pointer;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
}
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