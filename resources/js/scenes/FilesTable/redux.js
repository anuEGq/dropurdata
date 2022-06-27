import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const initialState = {
    AllfileData: undefined,
    isFileDataFailed: false,
    isFileDataLoading: false,
};

export const getAllFile = createAction("getAllFiles");

const slice = createSlice({
    name: "filesTable",
    initialState: initialState,
    reducers: {
        ongetFileData: (state) => {
            state.AllfileData = undefined;
            state.isFileDataFailed = false;
            state.isFileDataLoading = true;
        },
        onFileDataLoaded: (state, { payload }) => {
            state.AllfileData = payload;
            state.isFileDataLoading = false;
        },
        onGetFileDataFailed: (state) => {
            state.AllfileData = undefined;
            state.isFileDataFailed = true;
            state.isFileDataLoading = false;
        },
    },
});

export const { ongetFileData, onFileDataLoaded, onGetFileDataFailed } =
    slice.actions;

export default slice.reducer;