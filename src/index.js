"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
window.onload = () => {
    const appElement = document.getElementById('app');
    if (!appElement)
        throw Error('App root element not found');
    new app_1.App(appElement).start();
};
//# sourceMappingURL=index.js.map