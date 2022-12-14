import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilterValue(state, action) {
            return state = action.payload;
        },
    },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Uncaught Error: A case reducer on a non-draftable value must not return undefined
// if 10:
// state = action.payload; without "return" statement
