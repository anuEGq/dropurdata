import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const initialState = {
    fileCouts: undefined,
    isFileCountFailed: false,
    isFileCountLoading: false,
};

export const getFileCounts = createAction("getFileCounts");

const slice = createSlice({
    name: "dashBoard",
    initialState: initialState,
    reducers: {
        ongetFileCounts: (state) => {
            state.fileCouts = undefined;
            state.isFileCountFailed = false;
            state.isFileCountLoading = true;
        },
        onFileCountLoaded: (state, { payload }) => {
            state.fileCouts = payload;
            state.isFileCountLoading = false;
        },
        onGetFileCountFailed: (state) => {
            state.fileCouts = undefined;
            state.isFileCountFailed = true;
            state.isFileCountLoading = false;
        },
    },
});

export const { ongetFileCounts, onFileCountLoaded, onGetFileCountFailed } =
    slice.actions;

export default slice.reducer;
