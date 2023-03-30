export const setToLocalStoradge = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStoradge = (key: string): any => {
  const value = localStorage.getItem(key);
  if (value == null) return null;
  else return JSON.parse(value);
};
