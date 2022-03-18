import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { itemListReducer, itemDetailsReducer } from "./reducers/itemReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  custLoginReducer,
  custSignupReducer,
  custDetailsReducer,
  custUpdateProfileReducer,
} from "./reducers/custReducers";

// reducers to handle piece of functionality
const reducer = combineReducers({
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
  cart: cartReducer,
  userLogin: custLoginReducer,
  custSignup: custSignupReducer,
  custDetails: custDetailsReducer,
  custUpdateProfile: custUpdateProfileReducer,
});

// Loading items from local storage
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// Loading user info from local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Loading address from local storage
const shippingAddFromStorage = localStorage.getItem("shippingAdd")
  ? JSON.parse(localStorage.getItem("shippingAdd"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAdd: shippingAddFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
