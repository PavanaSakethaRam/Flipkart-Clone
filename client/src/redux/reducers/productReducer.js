import {GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL,GET_PRODUCT_BY_ID_REQUEST,GET_PRODUCT_BY_ID_SUCCESS,GET_PRODUCT_BY_ID_FAIL,GET_PRODUCT_BY_ID_RESET} from '../constants/productConstatnt';


export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false,
            };
        case GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getProductByIdReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID_REQUEST:
            return {
                loading: true,
            };
        case GET_PRODUCT_BY_ID_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case GET_PRODUCT_BY_ID_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case GET_PRODUCT_BY_ID_RESET:
            return {
                product: {},
            };
        default:
            return state;
    }
};