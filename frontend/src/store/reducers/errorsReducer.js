import { toast } from "react-toastify";
import { CONSTANTS } from "../actions";

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_ERR: {
      toast.error("Um erro ocorreu ao tentar adicionar...");
      return state;
    }
    case CONSTANTS.REMOVE_ERR: {
      toast.error("Um erro ocorreu durante a remoção...");
      return state;
    }
    case CONSTANTS.UPDATE_ERR: {
      toast.error("Um ocorreu ao tentar atelrar os dados...");
      return state;
    }
    default:
      return state;
  }
};

export default errorsReducer;