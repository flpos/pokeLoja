import styled from 'styled-components';
import caretDown from '../../assets/icons/caret-down.svg';

interface ShowMobileProps {
  showMobile: boolean;
}

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  @media (max-width: 450px) {
    position: fixed;
    max-height: calc(100vh - 104px);
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: white;
  }
  > * {
    transition: 0.1s linear;
  }
`;

export const ItemContainer = styled.div.attrs((props: ShowMobileProps) => ({
  showMobile: props.showMobile,
}))`
  height: calc(100vh - 60px - 126px);
  overflow-y: scroll;
  @media (max-width: 450px) {
    height: ${(props) =>
      props.showMobile ? 'calc(100vh - 104px - 84px)' : '0px'};
    /* display: ${(props) => (props.showMobile ? 'block' : 'none')}; */
  }
`;

export const CartStatus = styled.div.attrs((props: ShowMobileProps) => ({
  showMobile: props.showMobile,
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  padding: 8px;
  border-top: 1px solid ${(props) => props.theme.primary};
  @media (max-width: 450px) {
    display: ${(props) => (props.showMobile ? 'flex' : 'none')};
  }
`;

export const Button = styled.button.attrs((props: ShowMobileProps) => ({
  showMobile: props.showMobile,
}))`
  height: 42px;
  border-radius: 0px;
  border: none;
  background-color: ${(props) => props.theme.primary};
  :focus {
    outline: none;
  }
  @media (max-width: 450px) {
    display: ${(props) => (props.showMobile ? 'block' : 'none')};
  }
`;

export const Icon = styled.span`
  display: inline-block;
  height: 16px;
  width: 16px;
  position: absolute;
  left: 10px;
  background: url('${caretDown}');
  background-size: 16px;
  @media (min-width: 450px) {
    display: none;
  }
`;
