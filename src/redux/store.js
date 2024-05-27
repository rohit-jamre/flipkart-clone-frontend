    import { createStore, combineReducers, applyMiddleware } from 'redux';
    import {thunk} from 'redux-thunk';
    import { composeWithDevTools } from 'redux-devtools-extension';
   import { getProductReducer,  getProductDetailsReducer } from './reducer/ProductReducer';
   import {cartReducer} from './reducer/cartReducer';
    
    const rootReducer = combineReducers({
      getProducts: getProductReducer,
      getProductDetails:getProductDetailsReducer,
      cart: cartReducer
    });
    
    const middleware = [thunk];
    
    const store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk))
    );
    
    export default store;
    