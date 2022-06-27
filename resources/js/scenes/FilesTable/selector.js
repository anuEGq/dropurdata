import { createSelector } from "reselect";
import { initialState } from "./redux";


const selectFileDataDomine = (state) => state.filesTable || initialState;
/* selectAllFilesData, selectAllFilesLoading */
export const selectAllFilesData = createSelector(
    selectFileDataDomine,
    (filesTableState) => filesTableState.AllfileData
);

export const selectAllFilesFailed = createSelector(
    selectFileDataDomine,
    (filesTableState) => filesTableState.isFileCountFailed
);

export const selectAllFilesLoading = createSelector(
    selectFileDataDomine,
    (filesTableState) => filesTableState.isFileCountLoading
);
