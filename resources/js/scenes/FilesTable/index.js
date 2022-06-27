import { bindActionCreators, compose } from "redux";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

import {getAllFile} from "./redux";

import Filetable from "./layout";

import {selectAllFilesData, selectAllFilesLoading} from "./selector";

const mapSateToprops = createStructuredSelector({
    fileData:selectAllFilesData,
    isAllFilesLoading:selectAllFilesLoading,
});
const mapDispatchToProps = (dispatch)=>
    bindActionCreators({
        getAllFile
    },  dispatch)


const withConnect = connect(mapSateToprops, mapDispatchToProps);

export default compose(withConnect)(Filetable);