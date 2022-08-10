import { createContext } from 'react';
export var I18nContext = createContext({
    messages: {},
});
export var I18nProvider = function (_a) {
    var _b = _a.messages, messages = _b === void 0 ? {} : _b, children = _a.children;
    return (<I18nContext.Provider value={{ messages: messages }}>{children}</I18nContext.Provider>);
};
