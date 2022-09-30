const favorite = [];
const SAVED_EVENT = "saved-data";
const STORAGE_KEY = "FAV-ANIME";

const saveData = () => {
  const parsed = JSON.stringify(favorite);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event(SAVED_EVENT));
};

const loadData = () => {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const anime of data) {
      favorite.push(anime);
    }
  }
};

export { favorite, saveData, loadData };
