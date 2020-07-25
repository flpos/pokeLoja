import React from 'react';
import Cart from './components/CartContainer';
import DisplayContainer from './components/DisplayContainer';
import Header from './components/Header';
import { Container, ApplicationWrapper, Main } from './components/layout';

const App: React.FC = () => {
  return (
    <ApplicationWrapper>
      <Header />
      <Container>
        <Main>
          <DisplayContainer />
        </Main>
        <aside>
          <Cart />
        </aside>
      </Container>
    </ApplicationWrapper>
  );
};

export default App;
