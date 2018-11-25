const defaultState = {
  focused: false
};

export default (state = { defaultState }, action) => {
  if (action.type === "search_foucus") {
    return {
      focused: true
    };
  }

  if (action.type === "search_Blur") {
    return {
      focused: false
    };
  }
  return state;
};
