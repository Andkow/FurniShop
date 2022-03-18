import {
  CUST_DETAILS_FAIL,
  CUST_DETAILS_REQUEST,
  CUST_DETAILS_SUCCESS,
  CUST_LOGIN_FAIL,
  CUST_LOGIN_REQUEST,
  CUST_LOGIN_SUCCESS,
  CUST_LOGOUT,
  CUST_REGISTER_FAIL,
  CUST_REGISTER_REQUEST,
  CUST_REGISTER_SUCCESS,
  CUST_UPDATE_PROFILE_FAIL,
  CUST_UPDATE_PROFILE_REQUEST,
  CUST_UPDATE_PROFILE_SUCCESS,
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

export const custSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_REGISTER_REQUEST:
      return { loading: true };
    case CUST_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case CUST_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const custDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case CUST_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CUST_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case CUST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const custUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case CUST_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case CUST_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
