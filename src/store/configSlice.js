import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:'config',
    initialState:{
        lang:'en'
    },
    reducers:{
        changeLanguageOption:(state,action)=>{
            state.lang = action.payload;
        }
    }
});
export const {changeLanguageOption} = configSlice.actions;

export default configSlice.reducer;