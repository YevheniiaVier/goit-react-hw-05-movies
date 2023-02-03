import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: ${p => p.theme.colors.primary};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }
  &:hover {
    background-color: ${p => p.theme.colors.accentDark};
    color: ${p => p.theme.colors.white};
    cursor: pointer;
  }

  &.selected {
    background-color: ${p => p.theme.colors.accentDark};
    color: ${p => p.theme.colors.white};
  }
  &.disabled {
    pointer-events: none;
    background-color: ${p => p.theme.colors.transparent};
    ArrowLeft::before,
    ArrowRight::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;
export const ArrowLeft = styled.div`
  transform: rotate(-135deg) translate(-50%);
  &::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }
`;

export const ArrowRight = styled.div`
  transform: rotate(45deg);
  &::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }
`;
