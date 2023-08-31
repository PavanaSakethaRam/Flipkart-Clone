import axios from 'axios';

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try{
        let res = await axios.get(`${URL}/products`)
        console.log(res);
        dispatch({
            type: 'GET_PRODUCTS_SUCCESS',
            payload: res.data
        })
    }catch(error){
        dispatch({
            type: 'GET_PRODUCTS_FAIL',
            payload: error.message
        })
    }
}