class TitleBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set quote(say) {
    this._quote = say;
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: aqua;
        }
      
        h1 {
            font-size: 4em;
        }
          
        @media screen and (max-width: 420px) {
            h1 {
                font-size: 2.5em;
            }
          
            em {
                font-size: 0.8em;
            }
        }
        </style>

        <h1>Your Anime List</h1>
        <em>"${this._quote.quote}"</em>
        <em>- ${this._quote.character} from ${this._quote.anime}</em>
        `;
  }
}

customElements.define("title-bar", TitleBar);
