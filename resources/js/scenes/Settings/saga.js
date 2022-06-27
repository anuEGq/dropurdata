import { call, put, takeLatest  } from "redux-saga/effects";
import { loadSettings } from "../saga";
import {setSettings} from "../../services/index";
import { onSubmit, submitRequested, onSubmitFailed } from "./redux";

function* submitSettings(action) {
  try {
    yield put(submitRequested(true))
    yield call(()=>setSettings(action.payload))
    yield put(submitRequested(false))
   // yield call(loadSettings())
  } catch {
    yield put(onSubmitFailed())
  }

}

//generator function
//yield - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export default function* watchFunc() {
    yield takeLatest(onSubmit.type, submitSettings);
}
  