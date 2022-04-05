import axios from "axios";
import {
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_FAIL,
  ITEM_DELETE_SUCCESS,
  ITEM_DELETE_REQUEST,
  ITEM_DELETE_FAIL,
  ITEM_CREATE_REQUEST,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_FAIL,
  ITEM_UPDATE_REQUEST,
  ITEM_UPDATE_SUCCESS,
  ITEM_UPDATE_FAIL,
  ITEM_CREATE_REVIEW_REQUEST,
  ITEM_CREATE_REVIEW_SUCCESS,
  ITEM_CREATE_REVIEW_FAIL,
} from "../constants/itemConstants";
import { logout } from "./custEvents";

// Fetching data from "/api/products"
export const listItems = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: ITEM_LIST_REQUEST });

    // Requesting data
    const { data } = await axios.get(`/api/products?keyword=${keyword}`);

    dispatch({
      type: ITEM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_LIST_FAIL,
      payload:
        error.response && error.response.data.message //Getting custom error
          ? error.response.data.message
          : error.message,
    });
  }
};

// Fetching data from "/api/items/:id"
export const listItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_DETAILS_REQUEST });

    // Requesting data
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: ITEM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteItem = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ITEM_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/products/${id}`, config);

    dispatch({
      type: ITEM_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ITEM_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createItem = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ITEM_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/products`, {}, config);

    dispatch({
      type: ITEM_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ITEM_UPDATE_REQUEST,
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

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );

    dispatch({
      type: ITEM_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ITEM_CREATE_REVIEW_REQUEST,
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

      await axios.post(`/api/products/${productId}/reviews`, review, config);

      dispatch({
        type: ITEM_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: ITEM_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };
