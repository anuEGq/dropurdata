import {getAllFile, ongetFileData, onFileDataLoaded, onGetFileDataFailed  } from "./redux";
import { getAllFiles} from "../../services"
import { call, put, takeLatest  } from "redux-saga/effects";

function* loadFileData(){
  try {
    yield put(ongetFileData())
    const response = yield call(()=>getAllFiles())
    yield put(onFileDataLoaded(response.AllfileData))
  } catch {
    yield put(onGetFileDataFailed())
  }
}
export default function* watchFunc() {
  yield takeLatest(getAllFile.type, loadFileData)
  }
  