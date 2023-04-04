const favorite = [];
const STORAGE_KEY = 'FAV-ANIME';

const saveData = () => {
  const parsed = JSON.stringify(favorite);
  localStorage.setItem(STORAGE_KEY, parsed);
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

const findAnimeIndex = (id) => {
  for (const index in favorite) {
    if (favorite[index].id === id) return index;
  }
  return -1;
};

const deleteFavoriteAnime = (animeId) => {
  const animeTarget = findAnimeIndex(animeId);
  if (animeTarget === -1) return;

  favorite.splice(animeTarget, 1);
  saveData();
};

const addFavoriteAnime = async (animeId) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
  const responseJson = await response.json();

  favorite.push({
    id: responseJson.data.mal_id,
    title: responseJson.data.title,
    title_japan: responseJson.data.title_japanese,
    img: responseJson.data.images.jpg.image_url,
    rank: responseJson.data.rank,
  });
  saveData();
}

export { favorite, loadData, deleteFavoriteAnime, addFavoriteAnime };
