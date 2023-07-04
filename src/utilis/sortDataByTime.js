export const sortData = (data) => {
  return [...data].sort((a, b) => new Date(a.started) - new Date(b.started));
};
