import {
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_FAIL,
} from "../constants/itemConstants";

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
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
