const getLocalStorage = (key: string, defaultValue: unknown) => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  }
  return defaultValue;
};

export default getLocalStorage;
