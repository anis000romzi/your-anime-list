/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 860:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AnimeItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(AnimeItem, _HTMLElement);

  var _super = _createSuper(AnimeItem);

  function AnimeItem() {
    var _this;

    _classCallCheck(this, AnimeItem);

    _this = _super.call(this);
    _this._shadowRoot = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  _createClass(AnimeItem, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "anime",
    set: function set(anime) {
      this._anime = anime;
      this.render();
    }
  }, {
    key: "clickEvent",
    set: function set(event) {
      this._clickEvent = event;
      this.render();
    }
  }, {
    key: "animeId",
    get: function get() {
      return this._shadowRoot.querySelector("#item-header").getAttribute("data-value");
    }
  }, {
    key: "render",
    value: function render() {
      var genreName = [];

      this._anime.genres.forEach(function (genre) {
        genreName.push(genre.name);
      });

      var genre = genreName.slice(0);
      this._shadowRoot.innerHTML = "\n        <style>\n        * {\n          padding: 0;\n          margin: 0;\n          box-sizing: border-box;\n        }\n\n        :host {\n          margin: 1%;\n        }\n      \n        .item-header {\n          padding: 1%;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          border: black 1px solid;\n          flex-wrap: wrap;\n        }\n\n        .item-header > button {\n          border: 0;\n          font-size: 1.5em;\n          background-color: transparent;\n          cursor: pointer;\n          padding: 1%;\n        }\n\n        .item-body {\n          display: flex;\n          align-items: center;\n          border: black 1px solid;\n          border-top: none;\n        }\n\n        .item-body > img {\n          border-right: black 1px solid;\n        }\n\n        .item-body > ul {\n          margin-left: 2vw;\n          list-style: none;\n        }\n\n        .item-desc {\n          display: flex;\n          align-items: center;\n          border: black 1px solid;\n          border-top: none;\n        }\n\n        .item-desc > h4 {\n          align-self: stretch;\n          padding: 2%;\n          background-color: yellow;\n        }\n\n        .item-desc > p {\n          padding: 2%;\n          border-left: black 1px solid;\n        }\n\n        @media screen and (max-width: 700px) {\n          .item-body {\n            flex-direction: column;\n            text-align: center;\n          }\n\n          .item-body > img {\n            border: none;\n          }\n\n          .item-body > ul {\n            border-top: black 1px solid;\n            padding: 1%;\n            width: 100%;\n            margin: 0;\n          }\n\n          .item-desc {\n            flex-direction: column;\n          }\n\n          .item-desc > p {\n            border-top: black 1px solid;\n            border-left: none;\n          }\n        }\n        </style>\n\n        <div id=\"item-header\" class=\"item-header\">\n            <h2>".concat(this._anime.title, " | ").concat(this._anime.title_japanese, " <small>#").concat(this._anime.rank, "</small></h2>\n            <button id=\"fav-btn\">Add to favorite &#128150</button>\n          </div>\n          <div id=\"item-body\" class=\"item-body\">\n            <img\n              class=\"anime-img\"\n              src=\"").concat(this._anime.images.jpg.image_url, "\"\n              alt=\"Image\"\n            />\n            <ul>\n              <li>Score: ").concat(this._anime.score, "</li>\n              <li id=\"genre\">Genre: ").concat(genre, "</li>\n              <li>Episodes: ").concat(this._anime.episodes, "</li>\n              <li>Duration: ").concat(this._anime.duration, "</li>\n              <li>Status: ").concat(this._anime.status, "</li>\n              <li>Aired: ").concat(this._anime.aired.string, "</li></li>\n              <li>Rating: ").concat(this._anime.rating, "</li>\n              <li>\n                Trailer:\n                <a\n                  href=\"").concat(this._anime.trailer.url, "\"\n                  target=\"_blank\"\n                  >").concat(this._anime.trailer.url, "</a\n                >\n              </li>\n            </ul>\n          </div>\n          <div id=\"item-desc\" class=\"item-desc\">\n            <h4>Synopsis</h4>\n            <p>\n            ").concat(this._anime.synopsis, "\n            </p>\n          </div>");

      this._shadowRoot.querySelector("#fav-btn").addEventListener("click", this._clickEvent);
    }
  }]);

  return AnimeItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("anime-item", AnimeItem);

/***/ }),

/***/ 577:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FavoriteItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FavoriteItem, _HTMLElement);

  var _super = _createSuper(FavoriteItem);

  function FavoriteItem() {
    var _this;

    _classCallCheck(this, FavoriteItem);

    _this = _super.call(this);
    _this._shadowRoot = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  _createClass(FavoriteItem, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "favAnime",
    set: function set(favorite) {
      this._favAnime = favorite;
      this.render();
    }
  }, {
    key: "clickEvent",
    set: function set(event) {
      this._clickEvent = event;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this._shadowRoot.innerHTML = "\n        <style>\n        * {\n          padding: 0;\n          margin: 0;\n          box-sizing: border-box;\n        }\n      \n        :host {\n          background-color: white;\n          display: flex;\n          border: black 1px dashed;\n          border-left: none;\n          border-right: none;\n          margin: 5px 0;\n        }\n\n        .fav-desc {\n          padding: 5px;\n        }\n          \n        .fav-desc > button {\n          padding: 4px 15%;\n          background-color: white;\n          border: black 1px solid;\n          cursor: pointer;\n        }\n\n        img {\n          height: auto;\n          width: 100px;\n        }\n        </style>\n\n        <img\n        class=\"fav-img\"\n        src=\"".concat(this._favAnime.img, "\"\n        alt=\"Image\"\n        />\n        <div id=\"fav-desc\" class=\"fav-desc\">\n            <h4>").concat(this._favAnime.title, " <small>#").concat(this._favAnime.rank, "</small></h4>\n            <h5>").concat(this._favAnime.title_japan, "</h5>\n            <button id=\"remove-fav\">\n            &#128148\n            </button>\n        </div>\n        ");

      this._shadowRoot.querySelector("#remove-fav").addEventListener("click", this._clickEvent);
    }
  }]);

  return FavoriteItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("favorite-item", FavoriteItem);

/***/ }),

/***/ 640:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FooterBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FooterBar, _HTMLElement);

  var _super = _createSuper(FooterBar);

  function FooterBar() {
    var _this;

    _classCallCheck(this, FooterBar);

    _this = _super.call(this);
    _this._shadowRoot = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  _createClass(FooterBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this._shadowRoot.innerHTML = "\n        <style>\n        :host {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            position: fixed;\n            bottom: 0;\n            width: 100%;\n            background-color: aqua;\n        }\n\n        a {\n            color: black\n        }\n        </style>\n  \n        <strong>Copyright\xA9 2022 by lordanis123</strong>\n        <small>\n        Powered by\n        <a href=\"https://jikan.moe/\" target=\"_blank\">Jikan (\u6642\u9593)</a> and\n        <a href=\"https://animechan.vercel.app/\" target=\"_blank\">\n            Animechan\n        </a>\n        </small>\n        ";
    }
  }]);

  return FooterBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("footer-bar", FooterBar);

/***/ }),

/***/ 917:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SearchBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SearchBar, _HTMLElement);

  var _super = _createSuper(SearchBar);

  function SearchBar() {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _super.call(this);
    _this._shadowRoot = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  _createClass(SearchBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "clickEvent",
    set: function set(event) {
      this._clickEvent = event;
      this.render();
    }
  }, {
    key: "value",
    get: function get() {
      return this._shadowRoot.querySelector("#search-value").value;
    }
  }, {
    key: "render",
    value: function render() {
      this._shadowRoot.innerHTML = "\n    <style>\n    :host {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 16px 0;\n    }\n\n    input {\n        padding: 1em 1em;\n        width: 60%;\n        background-color: #f3f3f3;\n        border: solid 0px;\n        border-radius: 50px;\n        border: black 1px solid;\n      }\n      \n    button {\n        margin-left: 7px;\n        background-color: yellow;\n        color: black;\n        cursor: pointer;\n        padding: 1em 1.1em;\n        white-space: nowrap;\n        border-radius: 50px;\n        border: black 1px solid;\n    </style>\n\n    <input placeholder=\"Search Anime\" id=\"search-value\" type=\"search\" />\n    <button id=\"search-button\" type=\"submit\">\n    &#128270\n    </button>\n\n      ";

      this._shadowRoot.querySelector("#search-button").addEventListener("click", this._clickEvent);
    }
  }]);

  return SearchBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("search-bar", SearchBar);

/***/ }),

/***/ 717:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TitleBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TitleBar, _HTMLElement);

  var _super = _createSuper(TitleBar);

  function TitleBar() {
    var _this;

    _classCallCheck(this, TitleBar);

    _this = _super.call(this);
    _this._shadowRoot = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  _createClass(TitleBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "quote",
    set: function set(say) {
      this._quote = say;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this._shadowRoot.innerHTML = "\n        <style>\n        * {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n        }\n\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          text-align: center;\n          background-color: aqua;\n        }\n      \n        h1 {\n            font-size: 4em;\n        }\n          \n        @media screen and (max-width: 420px) {\n            h1 {\n                font-size: 2.5em;\n            }\n          \n            em {\n                font-size: 0.8em;\n            }\n        }\n        </style>\n\n        <h1>Your Anime List</h1>\n        <em>\"".concat(this._quote.quote, "\"</em>\n        <em>- ").concat(this._quote.character, " from ").concat(this._quote.anime, "</em>\n        ");
    }
  }]);

  return TitleBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("title-bar", TitleBar);

/***/ }),

/***/ 982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Jost\", sans-serif;\r\n}\r\n\r\n/* TITLE-BAR */\r\ntitle-bar {\r\n  padding: 3%;\r\n}\r\n/* TITLE-BAR */\r\n\r\n/* FAV-LIST */\r\nfavorite-list {\r\n  padding-top: 60px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  favorite-list {\r\n    padding-top: 15px;\r\n  }\r\n}\r\n/* FAV-LIST */\r\n\r\n.open-btn {\r\n  margin-top: 2%;\r\n  background-color: yellow;\r\n  color: black;\r\n  cursor: pointer;\r\n  padding: 1em 1.1em;\r\n  white-space: nowrap;\r\n  border: black 1px solid;\r\n  border-left: none;\r\n  font-weight: 800;\r\n}\r\n\r\n/* SEARCH BAR */\r\nsearch-bar {\r\n  padding: 5px;\r\n}\r\n/* SEARCH BAR */\r\n\r\n/* ANIME-LIST */\r\nanime-list {\r\n  padding: 2% 2% 10%;\r\n}\r\n/* ANIME-LIST */\r\n\r\n/* FOOTER-BAR */\r\nfooter-bar {\r\n  padding: 2%;\r\n}\r\n/* FOOTER-BAR */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style/style.css
var style = __webpack_require__(982);
;// CONCATENATED MODULE: ./src/style/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const style_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/script/components/footer-bar.js
var footer_bar = __webpack_require__(640);
// EXTERNAL MODULE: ./src/script/components/title-bar.js
var title_bar = __webpack_require__(717);
// EXTERNAL MODULE: ./src/script/components/search-bar.js
var search_bar = __webpack_require__(917);
// EXTERNAL MODULE: ./src/script/components/anime-item.js
var anime_item = __webpack_require__(860);
// EXTERNAL MODULE: ./src/script/components/favorite-item.js
var favorite_item = __webpack_require__(577);
;// CONCATENATED MODULE: ./src/script/fav_anime.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var favorite = [];
var SAVED_EVENT = "saved-data";
var STORAGE_KEY = "FAV-ANIME";

var saveData = function saveData() {
  var parsed = JSON.stringify(favorite);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event(SAVED_EVENT));
};

var loadData = function loadData() {
  var serializedData = localStorage.getItem(STORAGE_KEY);
  var data = JSON.parse(serializedData);

  if (data !== null) {
    var _iterator = _createForOfIteratorHelper(data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var anime = _step.value;
        favorite.push(anime);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};


;// CONCATENATED MODULE: ./src/script/components/favorite-list.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var FavoriteList = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FavoriteList, _HTMLElement);

  var _super = _createSuper(FavoriteList);

  function FavoriteList() {
    var _this;

    _classCallCheck(this, FavoriteList);

    _this = _super.call(this);
    _this._shadowRoot = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  _createClass(FavoriteList, [{
    key: "favAnimes",
    set: function set(favorites) {
      this._favAnimes = favorites;
      this.render();
    }
  }, {
    key: "clickEvent",
    set: function set(event) {
      this._clickEvent = event;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this._shadowRoot.innerHTML = "\n    <style>\n    * {\n      padding: 0;\n      margin: 0;\n      box-sizing: border-box;\n    }\n  \n\n    :host {\n      height: 100%;\n      width: 0;\n      position: fixed;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      background-color: black;\n      overflow-x: hidden;\n    }\n\n    a {\n        padding: 8px 8px 8px 32px;\n        text-decoration: none;\n        font-size: 25px;\n        color: white;\n        display: block;\n      }\n      \n    h2 {\n        color: white;\n        margin-bottom: 5px;\n        margin-left: 10px;\n      }\n      \n      .closebtn {\n        position: absolute;\n        top: 0;\n        right: 25px;\n        font-size: 36px;\n        margin-left: 50px;\n      }\n    </style>\n    \n    <a href=\"javascript:void(0)\" class=\"closebtn\" id=\"close-btn\">&times;</a>\n    <h2>Favorite List</h2>";

      this._shadowRoot.querySelector("#close-btn").addEventListener("click", this._clickEvent);

      var findAnimeIndex = function findAnimeIndex(id) {
        for (var index in favorite) {
          if (favorite[index].id === id) return index;
        }

        return -1;
      };

      var deleteFav = function deleteFav(animeId) {
        var animeTarget = findAnimeIndex(animeId);
        if (animeTarget === -1) return;
        favorite.splice(animeTarget, 1);
        saveData();

        _this2.render();
      };

      this._favAnimes.forEach(function (favAnime) {
        var favoriteItemElement = document.createElement("favorite-item");

        var test = function test() {
          deleteFav(favAnime.id);
        };

        favoriteItemElement.favAnime = favAnime;
        favoriteItemElement.clickEvent = test;

        _this2._shadowRoot.appendChild(favoriteItemElement);
      });
    }
  }]);

  return FavoriteList;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("favorite-list", FavoriteList);
;// CONCATENATED MODULE: ./src/script/components/anime-list.js
function anime_list_typeof(obj) { "@babel/helpers - typeof"; return anime_list_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, anime_list_typeof(obj); }

function anime_list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function anime_list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function anime_list_createClass(Constructor, protoProps, staticProps) { if (protoProps) anime_list_defineProperties(Constructor.prototype, protoProps); if (staticProps) anime_list_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function anime_list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) anime_list_setPrototypeOf(subClass, superClass); }

function anime_list_createSuper(Derived) { var hasNativeReflectConstruct = anime_list_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = anime_list_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = anime_list_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return anime_list_possibleConstructorReturn(this, result); }; }

function anime_list_possibleConstructorReturn(self, call) { if (call && (anime_list_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return anime_list_assertThisInitialized(self); }

function anime_list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function anime_list_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; anime_list_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !anime_list_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return anime_list_construct(Class, arguments, anime_list_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return anime_list_setPrototypeOf(Wrapper, Class); }; return anime_list_wrapNativeSuper(Class); }

function anime_list_construct(Parent, args, Class) { if (anime_list_isNativeReflectConstruct()) { anime_list_construct = Reflect.construct.bind(); } else { anime_list_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) anime_list_setPrototypeOf(instance, Class.prototype); return instance; }; } return anime_list_construct.apply(null, arguments); }

function anime_list_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function anime_list_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function anime_list_setPrototypeOf(o, p) { anime_list_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return anime_list_setPrototypeOf(o, p); }

function anime_list_getPrototypeOf(o) { anime_list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return anime_list_getPrototypeOf(o); }





var AnimeList = /*#__PURE__*/function (_HTMLElement) {
  anime_list_inherits(AnimeList, _HTMLElement);

  var _super = anime_list_createSuper(AnimeList);

  function AnimeList() {
    var _this;

    anime_list_classCallCheck(this, AnimeList);

    _this = _super.call(this);
    _this._shadowRoot = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  anime_list_createClass(AnimeList, [{
    key: "animes",
    set: function set(animes) {
      this._animes = animes;
      this.render();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this._shadowRoot.innerHTML = "\n        <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n\n        * {\n          padding: 0;\n          margin: 0;\n          box-sizing: border-box;\n        }\n\n        h2 {\n            font-size: 3em;\n            padding-bottom: 6%;\n        }\n\n        @media screen and (max-width: 450px) {\n          h2 {\n            font-size: 2em;\n          }\n        }\n          \n        </style>\n        \n        <h2>Welcome ~</h2>\n      ";
    }
  }, {
    key: "renderError",
    value: function renderError(message) {
      this._shadowRoot.innerHTML = "\n        <style>\n        * {\n          padding: 0;\n          margin: 0;\n          box-sizing: border-box;\n        }\n\n        :host {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n\n        h2 {\n            font-size: 3em;\n        }\n          \n        h3 {\n            padding-bottom: 6%;\n        }\n          \n        </style>\n        \n        <h2>There's Nothing Here</h2>\n        <h3>".concat(message, "</h3>\n      ");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this._shadowRoot.innerHTML = "\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n      </style>";
      var favoriteList = document.querySelector("favorite-list");

      this._animes.forEach(function (anime) {
        var animeItemElement = document.createElement("anime-item");

        var addToFav = function addToFav() {
          fetch("https://api.jikan.moe/v4/anime/".concat(anime.mal_id)).then(function (response) {
            return response.json();
          }).then(function (animeJson) {
            favorite.push({
              id: animeJson.data.mal_id,
              title: animeJson.data.title,
              title_japan: animeJson.data.title_japanese,
              img: animeJson.data.images.jpg.image_url,
              rank: animeJson.data.rank
            });
            saveData();
            favoriteList.favAnimes = favorite;
          });
        };

        animeItemElement.anime = anime;
        animeItemElement.clickEvent = addToFav;

        _this2._shadowRoot.appendChild(animeItemElement);
      });
    }
  }]);

  return AnimeList;
}( /*#__PURE__*/anime_list_wrapNativeSuper(HTMLElement));

customElements.define("anime-list", AnimeList);
;// CONCATENATED MODULE: ./src/script/main.js





var main = function main() {
  var favoriteList = document.querySelector("favorite-list");
  var titleElement = document.querySelector("title-bar");
  var searchElement = document.querySelector("search-bar");
  var animeList = document.querySelector("anime-list");
  loadData();
  favoriteList.favAnimes = favorite;

  var onSearch = function onSearch() {
    fetch("https://api.jikan.moe/v4/anime?letter=".concat(searchElement.value, "&type=tv&order_by=popularity&sort=asc&sfw=true")).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      if (responseJson.data.length > 0) {
        return Promise.resolve(responseJson.data);
      } else {
        return Promise.reject("\"".concat(searchElement.value, "\" not found"));
      }
    }).then(showList)["catch"](showMessage);
  };

  var showList = function showList(anime) {
    animeList.animes = anime;
  };

  var showMessage = function showMessage(message) {
    animeList.renderError(message);
  };

  searchElement.clickEvent = onSearch;
  /** Open and close favorite list **/

  var openFavList = function openFavList() {
    document.querySelector("favorite-list").style.width = "280px";
  };

  var closeFavList = function closeFavList() {
    document.querySelector("favorite-list").style.width = "0";
  };

  document.querySelector("#open-btn").addEventListener("click", openFavList);
  favoriteList.clickEvent = closeFavList;
  /**  Open and close favorite list **/

  fetch("https://animechan.vercel.app/api/random").then(function (response) {
    return response.json();
  }).then(function (quote) {
    titleElement.quote = quote;
  });
};

/* harmony default export */ const script_main = (main);
;// CONCATENATED MODULE: ./src/index.js



addEventListener("DOMContentLoaded", script_main());
})();

/******/ })()
;