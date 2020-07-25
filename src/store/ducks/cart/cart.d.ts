// Data Types
interface FinishModal {
  itens: number;
  totalPrice: number;
}

// State
declare interface CartState {
  list: Array<IndexedPokemon>;
  finishModal?: FinishModal;
}
