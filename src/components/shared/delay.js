"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map