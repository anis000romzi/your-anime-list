class SearchBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this._shadowRoot.querySelector("#search-value").value;
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px 0;
    }

    input {
        padding: 1em 1em;
        width: 60%;
        background-color: #f3f3f3;
        border: solid 0px;
        border-radius: 50px;
        border: black 1px solid;
      }
      
    button {
        margin-left: 7px;
        background-color: yellow;
        color: black;
        cursor: pointer;
        padding: 1em 1.1em;
        white-space: nowrap;
        border-radius: 50px;
        border: black 1px solid;
    </style>

    <input placeholder="Search Anime" id="search-value" type="search" />
    <button id="search-button" type="submit">
    &#128270
    </button>

      `;

    this._shadowRoot
      .querySelector("#search-button")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
