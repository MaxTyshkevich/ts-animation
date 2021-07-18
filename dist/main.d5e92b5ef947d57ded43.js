/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card/card.scss":
/*!***************************************!*\
  !*** ./src/components/card/card.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/cards-field/cards-field.scss":
/*!*****************************************************!*\
  !*** ./src/components/cards-field/cards-field.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const game_1 = __webpack_require__(/*! ./components/game/game */ "./src/components/game/game.ts");
class App {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.game = new game_1.Game();
        this.rootElement.append(this.game.element);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch('./images.json');
            const categories = yield res.json();
            var ss = 'dfd';
            const cat = categories[0];
            const images = cat.images.map((name) => `${cat.category}/${name}`); //`?
            this.game.newGame(images);
        });
    }
}
exports.App = App;


/***/ }),

/***/ "./src/components/base-component.ts":
/*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseComponent = void 0;
class BaseComponent {
    constructor(tag = 'div', styles = []) {
        this.element = document.createElement(tag);
        this.element.classList.add(...styles);
    }
}
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = void 0;
const base_component_1 = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
__webpack_require__(/*! ./card.scss */ "./src/components/card/card.scss");
const FLIP_CLASS = 'flipped';
class Card extends base_component_1.BaseComponent {
    // принимать путь картинки для фронт
    constructor(image) {
        super('div', ['card-container']);
        this.image = image;
        this.element.innerHTML = `
      <div class="card">
        <div class="card__font" style="background-image: url('./images/${image}')"></div>
        <div class="card__back"></div>
      </div>`;
    }
    flipToFront() {
        console.log(`front`);
        return this.flip(true);
    }
    flipToBack() {
        console.log(`back`);
        return this.flip();
    }
    flip(isBack = false) {
        return new Promise((resolve) => {
            this.element.classList.toggle(FLIP_CLASS, isBack); // true = add /false = remove
            this.element.addEventListener('transitionend', () => resolve(), {
                once: true,
            });
        });
    }
}
exports.Card = Card;


/***/ }),

/***/ "./src/components/cards-field/cards-field.ts":
/*!***************************************************!*\
  !*** ./src/components/cards-field/cards-field.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardsField = void 0;
const base_component_1 = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
__webpack_require__(/*! ./cards-field.scss */ "./src/components/cards-field/cards-field.scss");
const SHOW_TIME = 15;
class CardsField extends base_component_1.BaseComponent {
    constructor() {
        super('div', ['cards-field']);
        this.cards = [];
    }
    clear() {
        this.cards = [];
        this.element.innerHTML = '';
    }
    addCards(cards) {
        this.cards = cards;
        this.cards.forEach((card) => {
            this.element.append(card.element);
        });
        setTimeout(() => {
            this.cards.forEach((card) => {
                card.flipToFront();
            });
        }, SHOW_TIME * 1000);
    }
}
exports.CardsField = CardsField;


/***/ }),

/***/ "./src/components/game/game.ts":
/*!*************************************!*\
  !*** ./src/components/game/game.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
const base_component_1 = __webpack_require__(/*! ../base-component */ "./src/components/base-component.ts");
const card_1 = __webpack_require__(/*! ../card/card */ "./src/components/card/card.ts");
const cards_field_1 = __webpack_require__(/*! ../cards-field/cards-field */ "./src/components/cards-field/cards-field.ts");
const delay_1 = __webpack_require__(/*! ../shared/delay */ "./src/components/shared/delay.ts");
const FLIP_DELAY = 2000;
class Game extends base_component_1.BaseComponent {
    constructor() {
        super();
        this.isAnimation = false;
        this.cardField = new cards_field_1.CardsField();
        this.element.append(this.cardField.element);
    }
    newGame(images) {
        // если игра была уже создана
        this.cardField.clear();
        const cards = images
            .concat(images)
            .map((url) => new card_1.Card(url))
            .sort(() => Math.random() - 0.5);
        cards.forEach((card) => {
            card.element.addEventListener('click', () => {
                console.log(`click`);
                this.cardHandler(card);
            });
        });
        this.cardField.addCards(cards);
    }
    cardHandler(card) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isAnimation)
                return;
            this.isAnimation = true;
            yield card.flipToFront();
            if (!this.activeCard) {
                this.activeCard = card;
                this.isAnimation = false;
                return;
            }
            if (this.activeCard.image != card.image) {
                yield delay_1.delay(FLIP_DELAY);
                yield Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
            }
            this.activeCard = undefined;
            this.isAnimation = false;
        });
    }
}
exports.Game = Game;


/***/ }),

/***/ "./src/components/shared/delay.ts":
/*!****************************************!*\
  !*** ./src/components/shared/delay.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.delay = void 0;
function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}
exports.delay = delay;


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var exports = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
window.onload = () => {
    const appElement = document.getElementById('app');
    if (!appElement)
        throw Error('App root element not found');
    new app_1.App(appElement).start();
};

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.d5e92b5ef947d57ded43.js.map