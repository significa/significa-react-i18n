"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nProvider = exports.I18nContext = void 0;
var react_1 = require("react");
exports.I18nContext = (0, react_1.createContext)({
    messages: {},
});
var I18nProvider = function (_a) {
    var _b = _a.messages, messages = _b === void 0 ? {} : _b, children = _a.children;
    return (<exports.I18nContext.Provider value={{ messages: messages }}>{children}</exports.I18nContext.Provider>);
};
exports.I18nProvider = I18nProvider;
