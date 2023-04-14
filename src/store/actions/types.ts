import { theme } from '@/constants/themes';

export enum HistoryActionTypes {
  CLEAR_HISTORY = 'CLEAR_HISTORY',
  ADD_TO_FUNC_HISTORY = 'ADD_TO_FUNC_HISTORY',
  ADD_TO_CLASS_HISTORY = 'ADD_TO_CLASS_HISTORY',
}

export enum ThemeActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
}

export interface ClearAllHistoryAction {
  type: typeof HistoryActionTypes.CLEAR_HISTORY;
}

export interface AddToFunctionalHistoryAction {
  type: typeof HistoryActionTypes.ADD_TO_FUNC_HISTORY;
  payload: string;
}

export interface AddToClassHistoryAction {
  type: typeof HistoryActionTypes.ADD_TO_CLASS_HISTORY;
  payload: string;
}

export interface ChangeThemeAction {
  type: ThemeActionTypes.CHANGE_THEME;
  payload: theme;
}

export type HistoryActions =
  | AddToClassHistoryAction
  | AddToFunctionalHistoryAction
  | ClearAllHistoryAction;

export type ThemeActions = ChangeThemeAction;
