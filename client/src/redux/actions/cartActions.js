import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART,ADD_TO_CART_FAIL } from '../constants/cartConstants';

const URL= 'http://localhost:8000';

export const addToCart = (id, quantity) => async(dispatch, getState) => {
    try{
        let {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({
            type: ADD_TO_CART,
            payload: {
                ...data,
                quantity
            },
        });
        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
    }catch(error){
        dispatch({
            type: ADD_TO_CART_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    });
};