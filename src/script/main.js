import "./components/title-bar.js";
import "./components/search-bar.js";
import "./components/anime-list.js";
import {favorite, loadData} from "./fav_anime.js";

const main = () => {
  const favoriteList = document.querySelector("favorite-list");
  const titleElement = document.querySelector("title-bar");
  const searchElement = document.querySelector("search-bar");
  const animeList = document.querySelector("anime-list");

  loadData()
  favoriteList.favAnimes = favorite;

  const onSearch = () => {
    fetch(
      `https://api.jikan.moe/v4/anime?letter=${searchElement.value}&type=tv&order_by=popularity&sort=asc&sfw=true`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.data.length > 0) {
          return Promise.resolve(responseJson.data);
        } else {
          return Promise.reject(`"${searchElement.value}" not found`);
        }
      })
      .then(showList)
      .catch(showMessage);
  };

  const showList = (anime) => {
    animeList.animes = anime;
  };

  const showMessage = (message) => {
    animeList.renderError(message);
  };

  searchElement.clickEvent = onSearch;

  /** Open and close favorite list **/
  const openFavList = () => {
    document.querySelector("favorite-list").style.width = "280px";
  };

  const closeFavList = () => {
    document.querySelector("favorite-list").style.width = "0";
  };

  document.querySelector("#open-btn").addEventListener("click", openFavList);
  favoriteList.clickEvent = closeFavList;
  /**  Open and close favorite list **/

  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => {
      titleElement.quote = quote;
    });
};

export default main;
