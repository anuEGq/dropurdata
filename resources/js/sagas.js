import { all} from "typed-redux-saga";
import globalSagas from "./scenes/saga";
import dashBoardSaga from "./scenes/Dashboard/saga";
import fileUploadSaga from "./scenes/FileUpload/saga";
import settingsSaga from "./scenes/Settings/saga";

export default function* rootSaga() {
    yield all([
        globalSagas(),
        dashBoardSaga(),
        fileUploadSaga(),
        settingsSaga(),
    ]);
}
  