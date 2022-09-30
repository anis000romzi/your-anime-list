import "./favorite-item";
import {favorite, saveData} from "../fav_anime";

class FavoriteList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  set favAnimes(favorites) {
    this._favAnimes = favorites;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  

    :host {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: black;
      overflow-x: hidden;
    }

    a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: white;
        display: block;
      }
      
    h2 {
        color: white;
        margin-bottom: 5px;
        margin-left: 10px;
      }
      
      .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }
    </style>
    
    <a href="javascript:void(0)" class="closebtn" id="close-btn">&times;</a>
    <h2>Favorite List</h2>`;
    this._shadowRoot
      .querySelector("#close-btn")
      .addEventListener("click", this._clickEvent);

    const findAnimeIndex = (id) => {
      for (const index in favorite) {
        if (favorite[index].id === id) return index;
      }
      return -1;
    };

    const deleteFav = (animeId) => {
      const animeTarget = findAnimeIndex(animeId);
      if (animeTarget === -1) return;

      favorite.splice(animeTarget, 1);
      saveData();
      this.render();
    };

    this._favAnimes.forEach((favAnime) => {
      const favoriteItemElement = document.createElement("favorite-item");
      const test = () => {
        deleteFav(favAnime.id);
      };

      favoriteItemElement.favAnime = favAnime;
      favoriteItemElement.clickEvent = test;
      this._shadowRoot.appendChild(favoriteItemElement);
    });
  }
}

customElements.define("favorite-list", FavoriteList);
