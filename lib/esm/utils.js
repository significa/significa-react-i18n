var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useContext } from 'react';
import { I18nContext } from './context';
var PATTERN = /\{\{(.*?)\}\}/gim;
export var useMessages = function () {
    var messages = useContext(I18nContext).messages;
    if (process.env.NODE_ENV !== 'production' && !messages) {
        throw new Error("No messages found in context. Make sure you're wrapping your app with the I18nProvider with a 'messages' prop.");
    }
    return messages;
};
export var getMessage = function (messages, id) {
    if (!messages[id]) {
        if (process.env.NODE_ENV !== 'production') {
            throw new Error("Translation '".concat(id, "' not found."));
        }
        else {
            messages[id] = id;
        }
    }
    return messages[id];
};
export var getMatches = function (message) {
    return message.match(PATTERN);
};
export var parseMatchesForKey = function (matches, key, values) {
    var _a;
    for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
        var match = matches_1[_i];
        var matchName = match.replace(/\{\{|\}\}/gim, '');
        if (values[matchName] === undefined) {
            if (process.env.NODE_ENV !== 'production') {
                throw new Error("Missing value: `".concat(matchName, "` for translation key: `").concat(key, "`"));
            }
            else {
                return __assign(__assign({}, values), (_a = {}, _a[matchName] = matchName, _a));
            }
        }
    }
    return values;
};
export var getParts = function (message) {
    return message.split(PATTERN);
};
