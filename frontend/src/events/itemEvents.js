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
} from "../constants/itemConstants";

// Fetching data from "/api/products"
export const listItems = () => async (dispatch) => {
  try {
    dispatch({ type: ITEM_LIST_REQUEST });

    // Requesting data
    const { data } = await axios.get("/api/products");

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
