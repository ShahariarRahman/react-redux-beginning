import actionType from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case actionType.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export default productReducer;