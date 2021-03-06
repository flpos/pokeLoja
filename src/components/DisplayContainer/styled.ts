import styled from 'styled-components';

export const DisplayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-gap: 20px 16px;
  padding: 20px 16px;
  &.loading {
    opacity: 0.3;
  }
`;
