function getLocaleData(key) {
  let data = localStorage.getItem(key);

  if (data == null) {
    return [];
  } else {
    return JSON.parse(data);
  }
}
