//selector file is to select state
import { createSelector } from "reselect";
import {initialState} from "./redux";

const selectFileUploadDomine = (state) => state.fileUpload||initialState;

export const selectUploadActionRequested = createSelector(
    selectFileUploadDomine,
    (selectFileUploadState) => selectFileUploadState.fileUploadState
)

export const selectUploadActionFailed = createSelector(
    selectFileUploadDomine,
    (selectFileUploadState) => selectFileUploadState.fileUploadFailed
)

