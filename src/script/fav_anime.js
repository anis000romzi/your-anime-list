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

const addFavoriteAnime = (anime) => {
  if (findAnimeIndex(anime.mal_id) !== -1) return;

  favorite.push({
    id: anime.mal_id,
    title: anime.title,
    title_japan: anime.title_japanese,
    img: anime.images.jpg.image_url,
    rank: anime.rank,
  });
  saveData();
}

export { favorite, loadData, deleteFavoriteAnime, addFavoriteAnime };
