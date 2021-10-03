import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from 'redux-thunk'
import { loginReducer } from "../reducers/loginReduce";
import { registerReducer } from "../reducers/registerReducer";
import { estudentReducers } from '../reducers/estudentsReducers'
import { dataReducers } from "./Datos";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

  const reducers = combineReducers({
      login: loginReducer,
      register:registerReducer,
      estudiante: estudentReducers,
      Datos: dataReducers
  });

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)