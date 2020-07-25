import React from 'react';
import { connect } from 'react-redux';

import { DisplayWrapper } from './styled';
import DisplayItem from './DisplayItem';

interface DisplayContainerProps {
  pokemon?: Array<Pokemon>;
}

const DisplayContainer: React.FC<DisplayContainerProps> = (
  props: DisplayContainerProps
) => {
  const { pokemon } = props;
  return (
    <DisplayWrapper>
      {pokemon?.map((poke) => (
        <DisplayItem name={poke.name} key={`pokemon-item-${poke.url}`} />
      ))}
    </DisplayWrapper>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  pokemon: state.pokedex.pokemon?.filter((poke) => {
    const rgx = new RegExp(state.pokedex.filter);
    return rgx.test(poke.name);
  }),
});

export default connect(mapStateToProps)(DisplayContainer);
