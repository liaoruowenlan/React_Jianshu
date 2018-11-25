import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set("focused", true);
  }

  if (action.type === actionTypes.SEARCH_BLUE) {
    return state.set("focused", false);
  }

  if (action.type === actionTypes.CHANGELIST) {
    return state.set("list", action.data );
  }
  return state;
};
