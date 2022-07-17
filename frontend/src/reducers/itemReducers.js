import {
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_FAIL,
  ITEM_DELETE_REQUEST,
  ITEM_DELETE_SUCCESS,
  ITEM_DELETE_FAIL,
  ITEM_CREATE_RESET,
  ITEM_CREATE_FAIL,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_REQUEST,
  ITEM_UPDATE_REQUEST,
  ITEM_UPDATE_SUCCESS,
  ITEM_UPDATE_FAIL,
  ITEM_UPDATE_RESET,
  ITEM_CREATE_REVIEW_REQUEST,
  ITEM_CREATE_REVIEW_SUCCESS,
  ITEM_CREATE_REVIEW_FAIL,
  ITEM_CREATE_REVIEW_RESET,
  ITEM_TOP_REQUEST,
  ITEM_TOP_SUCCESS,
  ITEM_TOP_FAIL,
} from "../constants/itemConstants";

// Handling state for product list on home page
export const itemListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ITEM_LIST_REQUEST:
      return { loading: true, products: [] };
    case ITEM_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ITEM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Handling state for
export const itemDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ITEM_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ITEM_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ITEM_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const itemDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEM_DELETE_REQUEST:
      return { loading: true };
    case ITEM_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ITEM_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const itemCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEM_CREATE_REQUEST:
      return { loading: true };
    case ITEM_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ITEM_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ITEM_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ITEM_UPDATE_REQUEST:
      return { loading: true };
    case ITEM_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ITEM_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ITEM_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (
  state = { prodcut: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ITEM_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case ITEM_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case ITEM_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case ITEM_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ITEM_TOP_REQUEST:
      return { loading: true, products: [] };
    case ITEM_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case ITEM_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
