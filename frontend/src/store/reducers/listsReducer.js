import { CONSTANTS } from "../actions";

const initialState = []

const listsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.ADD_LIST:
      const list = action.payload
      const newList = { list }
      return [...state, newList]

    case CONSTANTS.ADD_CARD:
      const card = action.payload.card
      const newCard = { ...card }

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState

    default:
      return state;
  }
}

export default listsReducer;