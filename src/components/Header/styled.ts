import styled from 'styled-components';

export const HeaderBar = styled.header`
  background: linear-gradient(
      to bottom,
      ${(props) => props.theme.primary}DD,
      ${(props) => props.theme.primary}EE 90%,
      #444 90%,
      #4440
    ),
    black;
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  height: 60px;
  @media (max-width: 960px) {
    padding: 16px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: stretch;
    height: auto;
  }
`;

export const SearchBar = styled.input`
  padding: 9px;
  border-radius: 4px;
  border: none;
  transition: linear 0.2s;
  :focus {
    outline: none;
    box-shadow: 0px 1px 4px black;
  }
`;

export const Label = styled.label`
  background-color: white;
  color: black;
  padding: 0px 9px;
  border-radius: 4px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  @media (max-width: 425px) {
    margin-top: 8px;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border: none;
  font-size: 13px;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
