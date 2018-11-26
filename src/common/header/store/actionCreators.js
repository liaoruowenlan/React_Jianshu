import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";

const changList = data => ({
  type: actionTypes.CHANGELIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10) //在当前获取总的page。
});

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlue = () => ({
  type: actionTypes.SEARCH_BLUE
});

export const onMouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const onMouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePage = page => ({
  type: actionTypes.CHANGEPAGE,
  page
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data.data;
        dispatch(changList(data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
