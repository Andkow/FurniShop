import axios from "axios";
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
  CUST_DETAILS_RESET,
  CUST_LIST_FAIL,
  CUST_LIST_SUCCESS,
  CUST_LIST_REQUEST,
  CUST_LIST_RESET,
  CUST_DELETE_REQUEST,
  CUST_DELETE_SUCCESS,
  CUST_DELETE_FAIL,
} from "../constants/custConstants";
import { ORDER_LIST_MY_RESET } from "../constants/orderConstants";

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
  dispatch({ type: CUST_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: CUST_LIST_RESET });
};

export const signup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: CUST_REGISTER_REQUEST,
    });

    // Creating config object to send data headers content type
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request to API
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

    // Storing user object as a string on local storage
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

export const getCustDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUST_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: CUST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCustProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUST_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: CUST_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: CUST_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUST_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUST_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({
      type: CUST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUST_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: CUST_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: CUST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
