import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const url='https://dummyjson.com/products'

export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const response=await fetch(url);
    return response.json();
})

const productSlice=createSlice({
    name:'weatherSlice',
    initialState:{products:[],status:'not started',error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status='pending',
            state.products=[],
            state.error=null
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='successful',
            state.products=action.payload.products,
            state.error=null
        })
    }
})


export default productSlice.reducer;