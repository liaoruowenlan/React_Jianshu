import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlue = () => ({
  type: actionTypes.SEARCH_BLUE
});

const changList = (data)=>({
  type:actionTypes.CHANGELIST,
  data:fromJS(data)
})

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
       const data = res.data;
       dispatch(changList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
