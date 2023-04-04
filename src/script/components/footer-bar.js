class FooterBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            background-color: aqua;
        }

        a {
            color: black
        }
        </style>
  
        <strong>Copyright© ${new Date().getFullYear()} by lordanis123</strong>
        <small>
        Powered by
        <a href="https://jikan.moe/" target="_blank">Jikan (時間)</a> and
        <a href="https://animechan.vercel.app/" target="_blank">
            Animechan
        </a>
        </small>
        `;
  }
}

customElements.define("footer-bar", FooterBar);
