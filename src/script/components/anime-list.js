import './anime-item.js';
import './favorite-list.js';
import { addFavoriteAnime, deleteFavoriteAnime, favorite } from '../fav_anime.js';

class AnimeList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
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

  renderError(status, message) {
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
        
      `;
    if (status) {
      const heading = document.createElement('h2');
      heading.textContent = status;
      this._shadowRoot.appendChild(heading);
    }
    if (message) {
      const detail = document.createElement('h3');
      detail.textContent = message;
      this._shadowRoot.appendChild(detail);
    }
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
    const favoriteList = document.querySelector('favorite-list');
    this._animes.forEach((anime) => {
      const animeItemElement = document.createElement('anime-item');
      const addToFav = async () => {
        addFavoriteAnime(anime);
        favoriteList.favAnimes = favorite;
      };
      const deleteFav = () => {
        deleteFavoriteAnime(anime.mal_id);
        favoriteList.favAnimes = favorite;
      }

      animeItemElement.anime = anime;
      animeItemElement.addFavoriteAnime = addToFav;
      animeItemElement.deleteFavoriteAnime = deleteFav;
      animeItemElement.setAttribute('id', anime.mal_id)
      this._shadowRoot.appendChild(animeItemElement);
    });
  }
}

customElements.define('anime-list', AnimeList);
