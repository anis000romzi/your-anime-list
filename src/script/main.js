import './components/title-bar.js';
import './components/search-bar.js';
import './components/anime-list.js';
import { favorite, loadData } from './fav_anime.js';

const main = async () => {
  const favoriteList = document.querySelector('favorite-list');
  const titleElement = document.querySelector('title-bar');
  const searchElement = document.querySelector('search-bar');
  const animeList = document.querySelector('anime-list');

  loadData();
  favoriteList.favAnimes = favorite;

  const onSearch = async () => {
    try {
      showMessage('loading ...');
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?letter=${searchElement.value}&type=tv&order_by=popularity&sort=asc&sfw=true`
      );
      const responseJson = await response.json();

      if (responseJson.data.length > 0) {
        showList(responseJson.data);
      } else {
        showMessage(
          "There's Nothing Here",
          `"${searchElement.value}" not found`
        );
      }
    } catch (error) {
      showMessage('Something went wrong :(', error.message);
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

  const response = await fetch('https://animechan.vercel.app/api/random');
  const responseJson = await response.json();
  titleElement.quote = responseJson;
};

export default main;
