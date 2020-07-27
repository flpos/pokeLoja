import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import moneyFormatter from '../../util/moneyFormatter';
import CartItem from './CartItem';
import { openFinishModal } from '../../store/ducks/cart/actions';
import { CartWrapper, ItemContainer, CartStatus, Button, Icon } from './styled';

interface CartProps {
  cartItems: Array<IndexedPokemon>;
  openFinishModal: typeof openFinishModal;
}

const Cart: React.FC<CartProps> = (props: CartProps) => {
  const { cartItems, openFinishModal } = props;
  const [showMobileCart, setShowMobileCart] = useState(false);
  return (
    <CartWrapper>
      <Button showMobile onClick={() => setShowMobileCart(!showMobileCart)}>
        {showMobileCart && <Icon />}
        Carrinho: {cartItems.length ? `${cartItems.length} Pokemon` : 'vazio'}
      </Button>
      <ItemContainer showMobile={showMobileCart}>
        {cartItems.map((cartItem, i) => (
          <CartItem
            key={`cartItem${cartItem.id * (i + 1)}`}
            pokemon={cartItem}
            index={i}
          />
        ))}
      </ItemContainer>
      <CartStatus showMobile={showMobileCart}>
        <p>Valor total</p>
        <p>
          {moneyFormatter.format(
            cartItems.reduce((prev, next) => prev + next.price, 0)
          )}
        </p>
      </CartStatus>
      <Button onClick={openFinishModal} showMobile={showMobileCart}>
        Finalizar
      </Button>
    </CartWrapper>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  cartItems: state.cart.list,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ openFinishModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
