import {
  ADD_TO_FUNC_HISTORY,
  CLEAR_HISTORY,
  ADD_TO_CLASS_HISTORY,
  CHANGE_THEME,
} from '@/constants/actions';
import { theme } from '@/constants/themes';

export interface ClearAllHistoryAction {
  type: typeof CLEAR_HISTORY;
}

export interface AddToFunctionalHistoryAction {
  type: typeof ADD_TO_FUNC_HISTORY;
  payload: string;
}

export interface AddToClassHistoryAction {
  type: typeof ADD_TO_CLASS_HISTORY;
  payload: string;
}

export interface ChangeThemeAction {
  type: typeof CHANGE_THEME;
  payload: theme;
}

export type HistoryActionTypes =
  | AddToClassHistoryAction
  | AddToFunctionalHistoryAction
  | ClearAllHistoryAction;

export type ThemeActionTypes = ChangeThemeAction;
