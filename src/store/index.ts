import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import { load, save } from 'redux-localstorage-simple';

const createStoreWithMiddleware = applyMiddleware(save())(createStore);

export const store = createStoreWithMiddleware(rootReducer, load());
