import {
  CUST_LOGIN_FAIL,
  CUST_LOGIN_REQUEST,
  CUST_LOGIN_SUCCESS,
  CUST_LOGOUT,
} from "../constants/custConstants";

export const custLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_LOGIN_REQUEST:
      return { loading: true };
    case CUST_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case CUST_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case CUST_LOGOUT:
      return {};
    default:
      return state;
  }
};
