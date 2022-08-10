"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = void 0;
var utils_1 = require("./utils");
var useTranslation = function () {
    var messages = (0, utils_1.useMessages)();
    function t(key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var values = args[0];
        var message = (0, utils_1.getMessage)(messages, key);
        var matches = (0, utils_1.getMatches)(message);
        var parts = (0, utils_1.getParts)(message);
        if (!matches || !values) {
            return message;
        }
        var matchedValues = (0, utils_1.parseMatchesForKey)(matches, key, values);
        var elements = parts.map(function (part) {
            return matchedValues[part] || part;
        });
        return Array.isArray(elements) ? elements.join('') : elements;
    }
    return { t: t };
};
exports.useTranslation = useTranslation;
