"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
class BaseComponent {
    constructor(tag = 'div', styles = []) {
        this.element = document.createElement(tag);
        this.element.classList.add(...styles);
    }
}
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base-component.js.map