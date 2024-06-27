import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './CartSlice.js';
import CategorySlice from './CategorySlice.js'
import SearchSlice from './SearchSlice.js';

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice, 
        search: SearchSlice, 
    }
}); 

export default Store; 