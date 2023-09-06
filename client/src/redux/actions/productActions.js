import axios from "axios";

const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    let res = await axios.get(`${URL}/products`);
    dispatch({
      type: "GET_PRODUCTS_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRODUCTS_FAIL",
      payload: error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_PRODUCT_DETAILS_REQUEST",
    });
    let res = await axios.get(`${URL}/product/${id}`);

    dispatch({
      type: "GET_PRODUCT_DETAILS_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRODUCT_DETAILS_FAIL",
      payload: error.message,
    });
  }
};
