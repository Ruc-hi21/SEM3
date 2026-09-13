


import {configureStore} from '@reduxjs/toolkit';
import issSlice from './issSlice';

export const store=configureStore({
    reducer:{
        satelite:issSlice
    }
})

