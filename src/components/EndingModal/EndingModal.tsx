import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moneyFormatter from '../../util/moneyFormatter';
import { closeFinishModal } from '../../store/ducks/cart/actions';
import { bindActionCreators, Dispatch } from 'redux';

const FullScreenWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #000a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  min-width: 280px;
  max-width: 425px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 32px solid ${(props) => props.theme.primary};
`;

interface EndingModalProps {
  modalData?: FinishModal;
  closeFinishModal: typeof closeFinishModal;
}

const EndingModal: React.FC<EndingModalProps> = (props) => {
  const { modalData, closeFinishModal } = props;
  if (!modalData) return null;
  const cashback = modalData.totalPrice * 0.05;
  return (
    <FullScreenWrapper onClick={closeFinishModal}>
      <Modal>
        <h1>Obrigado!!</h1>
        <p>Você ganhou de volta:</p>
        <h2>{moneyFormatter.format(cashback)}</h2>
      </Modal>
    </FullScreenWrapper>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  modalData: state.cart.finishModal,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ closeFinishModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EndingModal);
