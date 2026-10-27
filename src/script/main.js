import './components/title-bar.js';
import './components/search-bar.js';
import './components/anime-list.js';
import { favorite, loadData } from './fav_anime.js';
import { ANIME_API_BASE_URL } from './anime-api.js';

const main = async () => {
  const favoriteList = document.querySelector('favorite-list');
  const titleElement = document.querySelector('title-bar');
  const searchElement = document.querySelector('search-bar');
  const animeList = document.querySelector('anime-list');

  loadData();
  favoriteList.favAnimes = favorite;

  let searchPending = false;
  const onSearch = async () => {
    if (searchPending) return;
    const query = searchElement.value.trim();
    if (!query) {
      showMessage('Search Anime', 'Enter an anime title to search.');
      return;
    }
    searchPending = true;
    try {
      showMessage('loading ...');
      const params = new URLSearchParams({
        q: query,
        type: 'tv',
        order_by: 'popularity',
        sort: 'asc',
        sfw: 'true',
      });
      const response = await fetch(
        `${ANIME_API_BASE_URL}/anime?${params}`
      );
      if (!response.ok) {
        throw new Error(response.status === 429
          ? 'Too many requests. Please wait a minute and try again.'
          : `Tenrai request failed (HTTP ${response.status}). Please try again later.`);
      }
      const responseJson = await response.json();
      if (!Array.isArray(responseJson.data)) {
        throw new Error('Tenrai returned an unexpected response. Please try again later.');
      }

      const animes = responseJson.data;
      if (animes.length > 0) {
        showList(animes);
      } else {
        showMessage(
          "There's Nothing Here",
          `"${query}" not found`
        );
      }
    } catch (error) {
      console.error('Anime search failed:', error);
      showMessage('Something went wrong :(', error instanceof TypeError
        ? 'Could not reach Tenrai. Check your connection and the browser Console for a blocked request or CORS error.'
        : error.message);
    } finally {
      searchPending = false;
    }
  };

  const showList = (anime) => {
    animeList.animes = anime;
  };

  const showMessage = (status, message) => {
    animeList.renderError(status, message);
  };

  searchElement.clickEvent = onSearch;

  /** Open and close favorite list **/
  const openFavList = () => {
    document.querySelector('favorite-list').style.width = '280px';
  };

  const closeFavList = () => {
    document.querySelector('favorite-list').style.width = '0';
  };

  document.querySelector('#open-btn').addEventListener('click', openFavList);
  favoriteList.clickEvent = closeFavList;
  /**  Open and close favorite list **/

  const response = await fetch('https://api.animechan.io/v1/quotes/random');
  const responseJson = await response.json();
  titleElement.quote = responseJson.data;
};

export default main;
