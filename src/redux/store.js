import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducer from "./reducers";
const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState) =>
  createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

const store = configureStore(initialState);

sagaMiddleware.run(rootSaga);

export default store;
