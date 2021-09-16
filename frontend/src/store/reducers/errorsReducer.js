import { toast } from "react-toastify";
import { CONSTANTS } from "../actions";

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_ERR: {
      toast.error("An error occurred");
      return state;
    }
    case CONSTANTS.REMOVE_ERR: {
      toast.error("A remove error occured....");
      return state;
    }
    case CONSTANTS.UPDATE_ERR: {
      toast.error("A change error occured...");
      return state;
    }
    default:
      return state;
  }
};

export default errorsReducer;