import React from 'react';
import styled from 'styled-components';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import moneyFormatter from '../../../util/moneyFormatter';
import { cartRemove } from '../../../store/ducks/cart/actions';

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: flex;
    align-items: center;
  }
`;

const Img = styled.img`
  height: 48px;
  width: 48px;
`;

interface CartItemProps {
  pokemon: IndexedPokemon;
  index: number;
  cartRemove: typeof cartRemove;
}

const Cartitem: React.FC<CartItemProps> = (props) => {
  const { pokemon, index, cartRemove } = props;
  const { name, price, id } = pokemon;
  return (
    <ListItem>
      <p>
        <Img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={`Imagem do ${name}`}
        />
        {name}
      </p>
      <p>{moneyFormatter.format(price)}</p>
      <button onClick={() => cartRemove(index)}>remover</button>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ cartRemove }, dispatch);

export default connect(null, mapDispatchToProps)(Cartitem);
