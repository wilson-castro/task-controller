import { CONSTANTS } from "../actions";

const listsReducers = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.LIST_SEARCHED: {
      return [...action.payload]
    }
    // case CONSTANTS.ADD_LIST: {
    //   const { title, index } = action.payload;
    //   const newList = {
    //     title,
    //     index,
    //     cards: []
    //   };

    //   return [...state, newList];
    // }
    default:
      return state
  }
};

export default listsReducers;