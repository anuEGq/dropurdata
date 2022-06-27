import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
  import createReducer from "./reducers";
  import createSaga from "redux-saga";
  import rootSaga from "./sagas";

  
  const sagaMiddleware = createSaga();
  const middleware = [...getDefaultMiddleware(), sagaMiddleware];
  
  const store = configureStore({
    reducer: createReducer(),
    middleware
  });
  
  sagaMiddleware.run(rootSaga);
  
  export default store;
  