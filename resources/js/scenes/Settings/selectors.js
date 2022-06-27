import { createSelector } from "reselect";
import {initialState} from "./redux";

const selectSettingsDomine = (state) => state.settings||initialState;

export const selectSettingActionRequested = createSelector(
    selectSettingsDomine,
    (selectSettingsState) => selectSettingsState.SettingsState
)

export const selectSettingActionFailed = createSelector(
    selectSettingsDomine,
    (selectSettingsFailed) => selectSettingsFailed.SettingFailed
)