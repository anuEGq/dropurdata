import { getFileCounts, ongetFileCounts, onFileCountLoaded, onGetFileCountFailed } from "./redux";
import { getAllFileCounts} from "../../services"
import { call, put, takeLatest  } from "redux-saga/effects";

function* loadFileCounts(){
  try {
    yield put(ongetFileCounts())
    const response = yield call(()=>getAllFileCounts())
    yield put(onFileCountLoaded(response.data))
  } catch {
    yield put(onGetFileCountFailed())
  }
}
export default function* watchFunc() {
  yield takeLatest(getFileCounts.type, loadFileCounts)
  }
  