import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
//   display: grid;

//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-gap: 16px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;

      display: flex;
      flex-direction: column;
      gap: 20px;
margin: 0;
padding: 0;
justify-content: space-around;
      @media screen and (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
        gap: 20px;
      }

      @media screen and (min-width: 1280px) {
        column-gap: 16px;
      }
    }
`;

export const MovieCard = styled.li`
  display: flex;
  justify-content: center;
//   width: 100%;
    background-color: white;
    overflow: hidden;
    border-radius: 5px 5px 5px 5px;

    transition: box-shadow 250ms linear;

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
  margin: 0;
  padding: 0;
  color: ${p => p.theme.colors.accent};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;

  @media screen and (min-width: 768px) {
    line-height: 1.17;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Poster = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: auto;
  border-radius: 5px 5px 5px 5px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 455px;
    object-fit: cover;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 574px;
  }
`;
