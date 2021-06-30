"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsField = void 0;
const base_component_1 = require("../base-component");
require("./cards-field.scss");
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
//# sourceMappingURL=cards-field.js.map