"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const base_component_1 = require("../base-component");
const card_1 = require("../card/card");
const cards_field_1 = require("../cards-field/cards-field");
const delay_1 = require("../shared/delay");
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
//# sourceMappingURL=game.js.map