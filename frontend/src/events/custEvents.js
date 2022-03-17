import axios from "axios";
import {
  CUST_LOGIN_FAIL,
  CUST_LOGIN_REQUEST,
  CUST_LOGIN_SUCCESS,
  CUST_LOGOUT,
  CUST_REGISTER_FAIL,
  CUST_REGISTER_REQUEST,
  CUST_REGISTER_SUCCESS,
} from "../constants/custConstants";

// Different actions for users, login, logout and fail
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: CUST_LOGIN_REQUEST,
    });

    // Config object
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request to /api/users/login
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: CUST_LOGIN_SUCCESS,
      payload: data,
    });

    // Setting user to local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CUST_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: CUST_LOGOUT });
};

export const signup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: CUST_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({
      type: CUST_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: CUST_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CUST_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
