import { 
    configureStore, 
    combineReducers,
     getDefaultMiddleware 
} from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga/rootSaga';
import counterReducer from './counter';
import softwareReducer from './software';

const SagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    counter: counterReducer,
    software: softwareReducer
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false}), SagaMiddleware]
});

SagaMiddleware.run(watcherSaga);

export default store;