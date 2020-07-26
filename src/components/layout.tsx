import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 960px) {
    width: 960px;
    margin: 0px auto;
  }
`;

export const ApplicationWrapper = styled.div`
  display: grid;
  grid-template-rows: 60px calc(100vh - 60px);
  height: 100vh;
  max-width: 100vw;
  background-color: ${(props) => props.theme.primary}33;
  @media (max-width: 425px) {
    grid-template-rows: 104px calc(100vh - 104px);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  background-color: white;
  box-shadow: 1px 1px 10px lightgray;
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
export const Main = styled.main`
  height: calc(100vh - 60px);
  overflow-y: auto;
`;
export const Aside = styled.aside``;
