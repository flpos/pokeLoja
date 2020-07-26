import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import { cartAdd } from '../../../store/ducks/cart/actions';
import formatter from '../../../util/moneyFormatter';

import missingNo from '../../../assets/img/missing-no.png';

const Image = styled.img`
  width: 96px;
  height: 96px;
`;

const DisplayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.primary}33;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  p {
    margin: 0px;
  }
`;

const Button = styled.button`
  background: linear-gradient(to top, #ddda, #eeea),
    ${(props) => props.theme.primary};
  border: none;
  align-self: stretch;
  height: 42px;
  margin-top: 16px;
  :hover {
    background: linear-gradient(to top, #eeea, #f0f0f0aa),
      ${(props) => props.theme.primary};
  }
  :focus {
    outline: none;
  }
`;

interface DisplayOwnProps {
  name: string;
}
interface DisplayStoreProps {
  pokemon: IndexedPokemon;
}
interface DisplayDispatchProps {
  cartAdd(pokemon: IndexedPokemon): void;
}
type DisplayProps = DisplayOwnProps & DisplayStoreProps & DisplayDispatchProps;

const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
  const { pokemon, cartAdd } = props;
  const img =
    pokemon.id < 10091
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
      : missingNo;
  return (
    <DisplayItem>
      <Image src={img} alt={`Imagem do ${pokemon.name}`} />
      <p>{pokemon.name}</p>
      <p>{formatter.format(pokemon.price)}</p>
      <Button onClick={() => cartAdd(pokemon)}>Adicionar</Button>
    </DisplayItem>
  );
};

const mapStateToProps = (
  state: ApplicationState,
  ownProps: DisplayOwnProps
) => ({
  pokemon: state.pokedex.indexedPokemon[ownProps.name],
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ cartAdd }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Display);
