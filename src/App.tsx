import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Cart from './components/CartContainer';
import DisplayContainer from './components/DisplayContainer';
import Header from './components/Header';
import {
  Container,
  ApplicationWrapper,
  Main,
  Content,
  Aside,
} from './components/layout';
import { theme, GlobalStyle } from './theme';
import EndingModal from './components/EndingModal';

interface AppProps {
  selectedType?: PokemonType;
}

const App: React.FC<AppProps> = (props) => {
  const { selectedType } = props;
  return (
    <ThemeProvider theme={theme[selectedType?.name || 'normal']}>
      <ApplicationWrapper>
        <Header />
        <Container>
          <Content>
            <Main>
              <DisplayContainer />
            </Main>
            <Aside>
              <Cart />
            </Aside>
          </Content>
        </Container>
      </ApplicationWrapper>
      <GlobalStyle />
      <EndingModal />
    </ThemeProvider>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  selectedType: state.pokedex.selectedType,
});

export default connect(mapStateToProps)(App);
