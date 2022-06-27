import {
    combineReducers,
  } from "@reduxjs/toolkit";

import globalReducer from "./scenes/redux";
import dashBoardReducer from "./scenes/Dashboard/redux";
import fileUploadReducer from "./scenes/FileUpload/redux";
import settingsReducer from "./scenes/Settings/redux";
import { routerReducer } from 'react-router-redux'

export default function createReducer(){
    const rootReducer = combineReducers({
        global:globalReducer,
        dashBoard:dashBoardReducer,
        fileUpload:fileUploadReducer,
        settings:settingsReducer,
        routing: routerReducer,

      });
    return rootReducer;
}
