import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//state - connect store
//action - data coming from Components

//action contains the data, data will get from payload
//so action contains payload

//API call

export const counterApi = createAsyncThunk('/api/counter-api',async ()=>{
    const URL = 'https://raw.githubusercontent.com/aryank34/CounterAppRTK/main/counter.json';
    const response = await fetch(URL);
    const data = await response.json();
    return data; //store in action payload (Async (extra reducers))
})


const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{count:0, isLoading:false, counter:0, error:null},
    //Sync Reducers
    reducers:{
        plus(state, action){
            state.count = state.count + action.payload;
        },
        minus(state, action){
            state.count = state.count + action.payload; //we are sending -1, so value + (-1) will reduce the value;
        }
    },
    //Async Calls
    extraReducers:(builder)=>{
        builder.addCase(counterApi.pending,(state,action)=>{
            state.isLoading = true;
            state.counter = 0;
            state.message = '';
        }).addCase(counterApi.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.counter = action.payload.counter;
            state.message = action.payload.message;
        }).addCase(counterApi.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }

});

export default counterSlice.reducer; //Connect/consume with Store
export const {plus, minus} = counterSlice.actions; //Consume in Component