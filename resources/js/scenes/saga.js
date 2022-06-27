import { onInit, onInitStart, onSettingsLoaded, onInitFailed } from "./redux";
import { getSettings} from "../services"
import { call, put, takeLatest  } from "redux-saga/effects";

function* loadSettings(){
  try {
    yield put(onInitStart())
    const response = yield call(()=>getSettings())
    yield put(onSettingsLoaded(response.data))
  } catch {
    yield put(onInitFailed())
  }
}
export default function* watchFunc() {
  yield takeLatest(onInit.type, loadSettings)
  }
  