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
  margin-bottom: 10px;
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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

color: ${p => p.theme.colors.primary};
font-weight: ${p => p.theme.fontWeights.bolder};
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
