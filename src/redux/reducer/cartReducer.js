import * as actionType from '../constants/cartconstant';


export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART: 
      const item = action.payload;
      const existingItem = state.cartItems.find(product => product.id === item.id);
      if (existingItem) {
        const updatedCartItems = state.cartItems.map(product =>
          product.id === existingItem.id ? { ...product, quantity: product.quantity + 1 } : product
        );
        return { ...state, cartItems: updatedCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    case actionType.REMOVE_FROM_CART: 
      return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload) };
    default:
      return state;
  }
};

export default cartReducer;

