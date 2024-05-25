import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './CartSlice.js';
import CategorySlice from './CategorySlice.js'

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice, 
    }
}); 

export default Store; 