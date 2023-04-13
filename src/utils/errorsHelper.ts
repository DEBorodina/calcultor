export const getErrorMessage = (e: unknown): string => {
  let message = '';
  if (e instanceof Error) message = e.message;
  else message = String(e);
  return message;
};
