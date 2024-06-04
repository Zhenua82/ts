"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const elem = react_1.default.createElement("div", null, "a");
const elem2 = react_1.default.createElement("div", null,
    react_1.default.createElement("span", null, "a"));
const elem3 = react_1.default.createElement("div", { tabIndex: 0 },
    react_1.default.createElement("span", null, 1 + 2));
const elem4 = react_1.default.createElement('div', { tabIndex: 0 }, 1 + 2);
// const body = document.querySelector('body');
// body.append(elem);