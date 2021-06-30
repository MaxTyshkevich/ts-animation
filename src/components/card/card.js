"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const base_component_1 = require("../base-component");
require("./card.scss");
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
//# sourceMappingURL=card.js.map