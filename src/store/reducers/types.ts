import { theme } from '@/constants/themes';

export interface ThemeState {
  theme: theme;
}

export interface HistoryState {
  funcHistory: string[];
  classHistory: string[];
}

export interface GlobalStore {
  history: HistoryState;
  theme: ThemeState;
}
