import { createStore, combineReducers } from 'redux';
import RegisterReducer from "./components/RegisterForm/RegisterForm.reducer";
import LoginReducer from "./components/LoginForm/LoginForm.reducer";
import ProductListReducer from "./components/ProductList/ProductList.reducer";
import ProductDetailReducer from "./components/ProductDetail/ProductDetail.reducer";

const combinedReducer = combineReducers({ RegisterReducer, LoginReducer, ProductDetailReducer, ProductListReducer });
const store = createStore(combinedReducer);