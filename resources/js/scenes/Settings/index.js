import { bindActionCreators, compose } from "redux";
import { createStructuredSelector } from "reselect";

import {onSubmit} from "./redux";

import {onInit} from "../redux";

import SettingsLayout from "./layout";

import { selectedFormats, selectedFileSize, selectIsSettingsLoading , selectedSettingsId} from "../selectors";

import { connect } from "react-redux";

//mapStateToprops - inject selected state from selector to corresponding scene as props.
const mapSateToprops = createStructuredSelector({
    supportdFormats : selectedFormats,
    supportedFileSize:selectedFileSize,
    isSettingsLoading : selectIsSettingsLoading,
    settingsId:selectedSettingsId
    
});

//mapDispatchToProps - inject redux action as props to corresponding scene.
const mapDispatchToProps = (dispatch)=>
    bindActionCreators({
        onSubmit,
        onInit
    },  dispatch)


const withConnect = connect(mapSateToprops, mapDispatchToProps);

export default compose(withConnect)(SettingsLayout);