import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import moneyFormatter from '../../util/moneyFormatter';
import CartItem from './CartItem';
import { cartClear } from '../../store/ducks/cart/actions';

interface CartProps {
  cartItems: Array<IndexedPokemon>;
  cartClear: typeof cartClear;
}

const Cart: React.FC<CartProps> = (props: CartProps) => {
  const { cartItems, cartClear } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'auto',
      }}
    >
      <div style={{ flexGrow: 1 }}>
        {cartItems.map((cartItem, i) => (
          <CartItem
            key={`cartItem${cartItem.id * (i + 1)}`}
            pokemon={cartItem}
            index={i}
          />
        ))}
      </div>
      <div>
        <p>Valor total</p>
        <p>
          {moneyFormatter.format(
            cartItems.reduce((prev, next) => prev + next.price, 0)
          )}
        </p>
      </div>
      <button onClick={cartClear}>Finalizar</button>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  cartItems: state.cart.list,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ cartClear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
