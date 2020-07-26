import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ItemContainer = styled.div`
  height: calc(100vh - 60px - 84px);
  overflow-y: scroll;
`;

export const CartStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  padding: 8px;
  border-top: 1px solid ${(props) => props.theme.primary};
`;

export const FinishButton = styled.button`
  height: 42px;
  border-radius: 0px;
  border: none;
  background-color: ${(props) => props.theme.primary};
`;
