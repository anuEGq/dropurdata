import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const initialState ={
    settingsData:undefined,
    isInitFailed:false,
    isSettingsLoading:false,
};
export const onInit = createAction("onInit");

const slice = createSlice({
    name: "global",
    initialState: initialState,
    reducers: {
        onInitStart: (state) => {
            state.settingsData = undefined;
            state.isInitFailed = false;
            state.isSettingsLoading=true;
        },
        onSettingsLoaded: (state, { payload }) => {
            state.settingsData = payload;
            state.isSettingsLoading=false;
        },
        onInitFailed: (state) => {
            state.settingsData = undefined;
            state.isInitFailed = true;
            state.isSettingsLoading=false;
        },
    },
});

export const {
    onInitStart,
    onSettingsLoaded,
    onInitFailed
} = slice.actions;

const reducer = slice.reducer;

export default reducer;