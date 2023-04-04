class FavoriteItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set favAnime(favorite) {
    this._favAnime = favorite;
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
          background-color: white;
          display: flex;
          border: black 1px dashed;
          border-left: none;
          border-right: none;
          margin: 5px 0;
        }

        .fav-desc {
          padding: 5px;
        }
          
        .fav-desc > button {
          padding: 4px 15%;
          background-color: white;
          border: black 1px solid;
          cursor: pointer;
        }

        img {
          height: auto;
          width: 100px;
        }
        </style>

        <img
        class="fav-img"
        src="${this._favAnime.img}"
        alt="Image"
        />
        <div id="fav-desc" class="fav-desc">
            <h4>${this._favAnime.title} <small>#${this._favAnime.rank}</small></h4>
            <h5>${this._favAnime.title_japan}</h5>
            <button id="remove-fav">
            &#128148
            </button>
        </div>
        `;

    this._shadowRoot
      .querySelector('#remove-fav')
      .addEventListener('click', () => {
        this._clickEvent();
        document
          .querySelector('anime-list')
          ._shadowRoot.getElementById(this._favAnime.id).isFavorited = false;
      });
  }
}

customElements.define('favorite-item', FavoriteItem);
