import styled from 'styled-components';

export const CastBox = styled.div``;
export const CastInfo = styled.p``;

export const CastImg = styled.img.attrs(props => ({
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

export const CastList = styled.ul`
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

  //       display: flex;
  //       flex-direction: column;
  //       gap: 20px;
  // margin: 0;
  // padding: 0;
  // justify-content: space-around;
  //       @media screen and (min-width: 768px) {
  //         flex-wrap: wrap;
  //         flex-direction: row;
  //         gap: 20px;
  //       }

  //       @media screen and (min-width: 1280px) {
  //         column-gap: 16px;
  //       }
  //     }
`;

export const CastCard = styled.li`
  //   display: flex;
  //   justify-content: center;
`;
