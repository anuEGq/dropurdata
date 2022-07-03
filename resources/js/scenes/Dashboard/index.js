import { bindActionCreators, compose } from "redux";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

import {getFileCounts} from "./redux";
import DashboardLayout from "./layout";

import {selectFileCountData, selectIsFileCountLoading} from "./selectors";

import { selectSettings, selectIsSettingsLoading } from "../selectors";


/* onInit action from global redux */

import {onInit} from "../redux";

/* map the below states as props to dashboard layout */
const mapSateToprops = createStructuredSelector({
    fileCountData:selectFileCountData,
    isFileCountLoading:selectIsFileCountLoading,
    isSettingsLoading: selectIsSettingsLoading,
    settingsData:selectSettings
});

/* map the below redux actions as props to dashboard layout */
const mapDispatchToProps = (dispatch)=>
    bindActionCreators({
        onInit,
        getFileCounts
    },  dispatch)


const withConnect = connect(mapSateToprops, mapDispatchToProps);

export default compose(withConnect)(DashboardLayout);