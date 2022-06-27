import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const initialState ={
    SettingsState:false,
    SettingFailed: false,
};

export const onSubmit = createAction("ON_SEETTINGS_SUBMIT");

const slice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    submitRequested(state, action) {
      state.SettingsState = action.paylonLoadoad;
      state.SettingFailed = false;
    },
    onSubmitFailed(state){
      state.SettingsState = false;
      state.SettingFailed = true;
    },
  }
});

export const {
  submitRequested,
  onSubmitFailed,
} = slice.actions;

const reducer = slice.reducer;

export default reducer;
