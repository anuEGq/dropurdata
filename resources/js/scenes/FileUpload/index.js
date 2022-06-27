import { bindActionCreators, compose } from "redux";
import { createStructuredSelector } from "reselect";
import {onSubmit} from "./redux";
import FileUploadLayout from "./layout";
import {selectUploadActionRequested, selectUploadActionFailed} from "./selectors";
import { connect } from "react-redux";
import { selectedFormats, selectedFileSize, selectIsSettingsLoading} from "../selectors";


//mapStateToprops - inject selected state from selector to corresponding scene as props.
const mapStateToprops = createStructuredSelector({
    isLoading:selectUploadActionRequested,
    isFailed:selectUploadActionFailed,
    selectedFormats:selectedFormats,
    selectedFileSize:selectedFileSize,
    selectIsSettingsLoading:selectIsSettingsLoading,

});

//mapDispatchToProps - inject redux action as props to corresponding scene.
const mapDispatchToProps = (dispatch)=>
    bindActionCreators({
        onSubmit,
    },  dispatch)


const withConnect = connect(mapStateToprops, mapDispatchToProps);

//compose function inject the props to the layout of scene
export default compose(withConnect)(FileUploadLayout);