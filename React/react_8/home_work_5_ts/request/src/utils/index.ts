export function getLocalStorage(key: string) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export function saveLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}
