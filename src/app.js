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
exports.App = void 0;
const game_1 = require("./components/game/game");
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
            const cat = categories[0];
            const images = cat.images.map((name) => `${cat.category}/${name}`); //`?
            this.game.newGame(images);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map