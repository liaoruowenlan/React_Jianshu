import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1, //当前的page
  totalPage: 1 //list的总page。
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set("focused", true);
    case actionTypes.SEARCH_BLUE:
      return state.set("focused", false);
    case actionTypes.CHANGELIST:
      return state.set("list", action.data).set("totalPage", action.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionTypes.CHANGEPAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
