import { CART } from "../../constants/cart";

const initialState = {
    items: CART,
    total: 34.97
}

const cartReducer = (state = initialState, action) => {
    return state;
}

export default cartReducer;