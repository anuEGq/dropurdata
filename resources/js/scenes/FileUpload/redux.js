import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const initialState = {
    fileUploadState: false,
    fileUploadFailed: false,
};

export const onSubmit = createAction("ON_SUBMIT");

const slice = createSlice({
    name: "fileUpload",
    initialState: initialState,
    reducers: {
        submitRequested(state, action) {
            state.fileUploadState = action.payload;
            state.fileUploadFailed = false;
        },
        onUploadFailed(state) {
            state.fileUploadState = false;
            state.fileUploadFailed = true;
        },
    },
});

export const {
  submitRequested,
  onUploadFailed
} = slice.actions;

const reducer = slice.reducer;

export default reducer;
