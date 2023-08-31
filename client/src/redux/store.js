import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProductByIdReducer } from './reducers/productReducer';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductById: getProductByIdReducer,
});

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(    // This is for Redux DevTools
        applyMiddleware(...middleWare)
    )
);

export default store;