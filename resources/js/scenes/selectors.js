import { createSelector } from "reselect";
import {initialState} from "./redux";

const selectGlobal = (state) => state.global||initialState;

export const selectIsInitFailed = createSelector(
    selectGlobal,
    (globalState) => globalState.isInitFailed
)

export const selectSettings = createSelector(
    selectGlobal,
    (globalState) => globalState.settingsData?.settings
)

export const selectedFormats= createSelector(
    selectSettings,
    (settings) => {
        if(settings&&settings.length>0){
            return JSON.parse(settings[0].supported_files)
        }
        return [];
    }
)   

export const selectedSettingsId= createSelector(
    selectSettings,
    (settings) => {
        if(settings&&settings.length>0){
            return JSON.parse(settings[0].settings_id)
        }
        return undefined;
    }
)

export const selectedFileSize= createSelector(
    selectSettings,
    (settings) => {
        if(settings&&settings.length>0){
            return JSON.parse(settings[0].max_upload_size)
        }
        return 0;
    }
)



export const selectIsSettingsLoading= createSelector(
    selectGlobal,
    selectSettings,
    (globalState, settings) => globalState.isSettingsLoading||!settings
)

