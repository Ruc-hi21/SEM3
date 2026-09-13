import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


export const fetchlocation=createAsyncThunk('iss/fetchloaction',async()=>{
    const data=await fetch('http://api.open-notify.org/iss-now.json')
    return data.json()
})

const issSlice=createSlice({
    name:'issSlice',
    initialState:{status:'not started',response:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchlocation.fulfilled,(state,action)=>{
            state.response=action.payload.iss_position
            state.status='Connected'
        }),
        builder.addCase(fetchlocation.pending,(state,action)=>{
            state.response=null;
            state.status='Loading';
        }),
        builder.addCase(fetchlocation.rejected,(state,action)=>{
            state.response=null;
            state.status='Failed'
        })
    }
})
export default issSlice.reducer;