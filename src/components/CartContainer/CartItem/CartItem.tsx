import React from 'react';
import styled from 'styled-components';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import missingNo from '../../../assets/img/missing-no.png';
import moneyFormatter from '../../../util/moneyFormatter';
import { cartRemove } from '../../../store/ducks/cart/actions';

const ListItem = styled.div`
  display: flex;
  padding: 12px 8px;
  justify-content: space-between;
  align-items: center;
  p {
    display: flex;
    align-items: center;
  }
`;

const ItemData = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 0px;
  background-color: darkred;
  color: white;
  transition: 0.2s linear;
  :hover {
    background-color: red;
    color: black;
  }
  :focus {
    outline: none;
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
      <Img
        src={
          id < 10091
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            : missingNo
        }
        alt={`${name}`}
      />
      <ItemData>
        <p>{name}</p>
        <p>{moneyFormatter.format(price)}</p>
      </ItemData>
      <Button onClick={() => cartRemove(index)}>X</Button>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ cartRemove }, dispatch);

export default connect(null, mapDispatchToProps)(Cartitem);
