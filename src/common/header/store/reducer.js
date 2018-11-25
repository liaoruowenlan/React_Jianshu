import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set("focused", true);
    case actionTypes.SEARCH_BLUE:
      return state.set("focused", false);
    case actionTypes.CHANGELIST:
      return state.set("list", action.data);

    default:
      return state;
  }
};
