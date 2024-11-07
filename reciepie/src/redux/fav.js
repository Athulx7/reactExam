import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name:'favorite',
    initialState:[],
    reducers:{
        addtoFav:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const addtoFav = favSlice.actions
export default favSlice.reducer