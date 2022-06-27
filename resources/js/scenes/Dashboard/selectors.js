import { createSelector } from "reselect";
import { initialState } from "./redux";
import { selectedFormats } from "../selectors";
import { fileData } from "./contsnts";

const selectDasboardDomine = (state) => state.dashBoard || initialState;

export const selectFileCountData = createSelector(
    selectDasboardDomine,
    selectedFormats,
    (dashboardState, fileFormats) => {
        if (dashboardState?.fileCouts) {
            return Object.keys(fileData)
                .map((key) => {
                    if (
                        (dashboardState?.fileCouts[key]!==undefined) &&
                        fileFormats?.includes(fileData[key].type)
                    ) {
                        return {
                            ...fileData[key],
                            count: dashboardState.fileCouts[key],
                        };
                    }
                    return undefined;
                })
                .filter((val) => !!val);
        }
        return [];
    }
);

export const selectIsFileCountFailed = createSelector(
    selectDasboardDomine,
    (dashboardState) => dashboardState.isFileCountFailed
);

export const selectIsFileCountLoading = createSelector(
    selectDasboardDomine,
    selectFileCountData,
    (dashboardState, fileCounts) =>
        dashboardState.isFileCountLoading || !fileCounts
);
