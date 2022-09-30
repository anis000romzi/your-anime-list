class AnimeItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set anime(anime) {
    this._anime = anime;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get animeId() {
    return this._shadowRoot
      .querySelector("#item-header")
      .getAttribute("data-value");
  }

  render() {
    const genreName = [];
    this._anime.genres.forEach((genre) => {
      genreName.push(genre.name);
    });

    const [...genre] = genreName;

    this._shadowRoot.innerHTML = `
        <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :host {
          margin: 1%;
        }
      
        .item-header {
          padding: 1%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: black 1px solid;
          flex-wrap: wrap;
        }

        .item-header > button {
          border: 0;
          font-size: 1.5em;
          background-color: transparent;
          cursor: pointer;
          padding: 1%;
        }

        .item-body {
          display: flex;
          align-items: center;
          border: black 1px solid;
          border-top: none;
        }

        .item-body > img {
          border-right: black 1px solid;
        }

        .item-body > ul {
          margin-left: 2vw;
          list-style: none;
        }

        .item-desc {
          display: flex;
          align-items: center;
          border: black 1px solid;
          border-top: none;
        }

        .item-desc > h4 {
          align-self: stretch;
          padding: 2%;
          background-color: yellow;
        }

        .item-desc > p {
          padding: 2%;
          border-left: black 1px solid;
        }

        @media screen and (max-width: 700px) {
          .item-body {
            flex-direction: column;
            text-align: center;
          }

          .item-body > img {
            border: none;
          }

          .item-body > ul {
            border-top: black 1px solid;
            padding: 1%;
            width: 100%;
            margin: 0;
          }

          .item-desc {
            flex-direction: column;
          }

          .item-desc > p {
            border-top: black 1px solid;
            border-left: none;
          }
        }
        </style>

        <div id="item-header" class="item-header">
            <h2>${this._anime.title} | ${this._anime.title_japanese} <small>#${this._anime.rank}</small></h2>
            <button id="fav-btn">Add to favorite &#128150</button>
          </div>
          <div id="item-body" class="item-body">
            <img
              class="anime-img"
              src="${this._anime.images.jpg.image_url}"
              alt="Image"
            />
            <ul>
              <li>Score: ${this._anime.score}</li>
              <li id="genre">Genre: ${genre}</li>
              <li>Episodes: ${this._anime.episodes}</li>
              <li>Duration: ${this._anime.duration}</li>
              <li>Status: ${this._anime.status}</li>
              <li>Aired: ${this._anime.aired.string}</li></li>
              <li>Rating: ${this._anime.rating}</li>
              <li>
                Trailer:
                <a
                  href="${this._anime.trailer.url}"
                  target="_blank"
                  >${this._anime.trailer.url}</a
                >
              </li>
            </ul>
          </div>
          <div id="item-desc" class="item-desc">
            <h4>Synopsis</h4>
            <p>
            ${this._anime.synopsis}
            </p>
          </div>`;

    this._shadowRoot
      .querySelector("#fav-btn")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("anime-item", AnimeItem);
