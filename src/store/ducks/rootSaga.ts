import { all } from 'redux-saga/effects';

import pokedexSagas from './pokedex/sagas';

export default function* rootSaga(): Generator {
  yield all([pokedexSagas]);
}
