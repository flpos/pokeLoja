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
`;

export const SearchBar = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  transition: linear .2s;
  :focus {
    outline: none;
    box-shadow: 0px 1px 4px black;
  }
`;
