import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import {
  typesRequest,
  selectType,
  setFilter,
} from '../../store/ducks/pokedex/actions';
import { Container } from '../layout';
import { HeaderBar, HeaderContent, SearchBar, Select, Label } from './styled';

interface HeaderProps {
  types: Array<PokemonType>;
  selectedType?: PokemonType;
  selectType: typeof selectType;
  typesRequest: typeof typesRequest.request;
  setFilter: typeof setFilter;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { types, selectedType, selectType, typesRequest, setFilter } = props;
  useEffect(() => {
    typesRequest();
  }, [typesRequest]);
  return (
    <HeaderBar>
      <Container>
        <HeaderContent>
          <SearchBar
            type='text'
            placeholder='Pesquisar...'
            onChange={(e) => setFilter(e.target.value)}
          />
          <Label htmlFor='type-selector'>
            Lojas:
            <Select
              id='type-selector'
              value={selectedType?.name || ''}
              onChange={(event) => selectType(event.target.value)}
            >
              <option value='' disabled>
                Selecione uma loja
              </option>
              {types.map((type) => (
                <option
                  key={`adsfadsfadsf${Math.random() * 412341}`}
                  value={type.name}
                >
                  {type.name}
                </option>
              ))}
            </Select>
          </Label>
        </HeaderContent>
      </Container>
    </HeaderBar>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  types: state.pokedex.AvailibleTypes,
  selectedType: state.pokedex.selectedType,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { selectType, typesRequest: typesRequest.request, setFilter },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Header);
