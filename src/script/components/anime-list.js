import "./anime-item.js";
import "./favorite-list.js";
import {favorite, saveData} from "../fav_anime.js";

class AnimeList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  set animes(animes) {
    this._animes = animes;
    this.render();
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
        <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        h2 {
            font-size: 3em;
            padding-bottom: 6%;
        }

        @media screen and (max-width: 450px) {
          h2 {
            font-size: 2em;
          }
        }
          
        </style>
        
        <h2>Welcome ~</h2>
      `;
  }

  renderError(message) {
    this._shadowRoot.innerHTML = `
        <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h2 {
            font-size: 3em;
        }
          
        h3 {
            padding-bottom: 6%;
        }
          
        </style>
        
        <h2>There's Nothing Here</h2>
        <h3>${message}</h3>
      `;
  }

  render() {
    this._shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      </style>`;
    const favoriteList = document.querySelector("favorite-list");
    this._animes.forEach((anime) => {
      const animeItemElement = document.createElement("anime-item");
      const addToFav = () => {
        fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}`)
          .then((response) => response.json())
          .then((animeJson) => {
            favorite.push({
              id: animeJson.data.mal_id,
              title: animeJson.data.title,
              title_japan: animeJson.data.title_japanese,
              img: animeJson.data.images.jpg.image_url,
              rank: animeJson.data.rank,
            });

            saveData();
            favoriteList.favAnimes = favorite;
          });
      };

      animeItemElement.anime = anime;
      animeItemElement.clickEvent = addToFav;
      this._shadowRoot.appendChild(animeItemElement);
    });
  }
}

customElements.define("anime-list", AnimeList);
