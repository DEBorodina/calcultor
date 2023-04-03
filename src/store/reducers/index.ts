import { combineReducers } from 'redux';
import { HistoryState, historyReducer } from './historyReducer';

export interface GlobalStore {
  history: HistoryState;
}

export const rootReducer = combineReducers({
  history: historyReducer,
});
