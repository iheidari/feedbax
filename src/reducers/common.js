import actionTypes from "../constants/actionTypes/common";
const common = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOOKUPS:
      return {...state, lookups: action.lookups};
    default:
      return state;
  }
};

export default common;
