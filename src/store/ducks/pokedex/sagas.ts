import { all, put, takeLatest, select } from 'redux-saga/effects';
import { getTypes, getPokemonList } from '../../../services/api';
import { typesRequest, pokemonRequest, selectType } from './actions';

function* getTypesSaga(): Generator {
  try {
    const types = yield getTypes();
    yield put(typesRequest.success(types as Array<PokemonType>));
  } catch {
    yield put(typesRequest.failure('Erro ao carregar tipos de pokemons'));
  }
}
function* getPokemonSaga(): Generator {
  try {
    const url = yield select(
      (state: ApplicationState) => state.pokedex.selectedType?.url
    );
    const types = yield getPokemonList(url as string);
    yield put(pokemonRequest.success(types as Array<PokemonType>));
  } catch {
    yield put(pokemonRequest.failure('Erro ao carregar pokemons'));
  }
}

export default all([
  takeLatest(typesRequest.request, getTypesSaga),
  takeLatest([selectType, pokemonRequest.request], getPokemonSaga),
]);
