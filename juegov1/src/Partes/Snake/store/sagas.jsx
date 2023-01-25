import { all } from "redux-saga/effects"
import watcherSaga from "../snakeService/index"

export default function* rootSaga() {
  yield all([watcherSaga()])
}
