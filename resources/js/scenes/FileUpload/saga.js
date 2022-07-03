import { call, put, takeLatest  } from "redux-saga/effects";
import {uploadFile} from "../../services/index";
import { onSubmit,submitRequested,onUploadFailed } from "./redux";

function* submitFile(action) {
  try {
    const {value,goToDashBoard} = action.payload;

    yield put(submitRequested(true))
    yield call(()=>uploadFile(value))
    goToDashBoard();
    yield put(submitRequested(false))
  } catch {
    yield put(onUploadFailed(true))
  }

}

//generator function
//yield - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export default function* watchFunc() {
    yield takeLatest(onSubmit.type, submitFile);
}
  