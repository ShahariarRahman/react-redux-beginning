import actionType from "../actionTypes/actionTypes"

export const addToCart = (product) => {
    return {
        type: actionType.ADD_TO_CART,
        payload: product,
    }
}