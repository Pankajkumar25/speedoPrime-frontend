export const filterBySearch = <T>(
  arr: T[],
  query: string,
  keys: (keyof T)[]
): T[] => {
  if (!query.trim()) return arr;
  const lower = query.toLowerCase();
  return arr.filter((item) =>
    keys.some((key) => String(item[key]).toLowerCase().includes(lower))
  );
};
