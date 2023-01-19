import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import habitacion from "./salas/reducer"
import snakeServiceReducer from "../Partes/Snake/snakeService/reducer"
import rootSaga from "../Partes/Snake/store/sagas"
import empezarReducer from "./empezar/reducer"

const reducers = combineReducers({
  habitacion,
  snakeServiceReducer,
  empezarReducer,
})

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store
