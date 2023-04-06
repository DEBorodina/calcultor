import { combineReducers } from 'redux';
import { HistoryState, historyReducer } from './historyReducer';
import { ThemeState, themeReducer } from './themeReducer';

export interface GlobalStore {
  history: HistoryState;
  theme: ThemeState;
}

export const rootReducer = combineReducers({
  history: historyReducer,
  theme: themeReducer,
});
