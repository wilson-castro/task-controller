import { CONSTANTS } from "../actions";

const listsReducers = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.LIST_SEARCHED: {
      return [...action.payload]
    }
    default:
      return state
  }
};

export default listsReducers;