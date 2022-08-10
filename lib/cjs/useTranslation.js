"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = void 0;
var utils_1 = require("./utils");
var useTranslation = function () {
    var messages = (0, utils_1.useMessages)();
    var t = function (id, values) {
        if (values === void 0) { values = {}; }
        var message = (0, utils_1.getMessage)(messages, id);
        var matches = (0, utils_1.getMatches)(message);
        var parts = (0, utils_1.getParts)(message);
        if (!matches) {
            return message;
        }
        var matchedValues = (0, utils_1.parseMatchesForKey)(matches, id, values);
        var elements = parts.map(function (part) {
            return matchedValues[part] || part;
        });
        return Array.isArray(elements) ? elements.join('') : elements;
    };
    return { t: t };
};
exports.useTranslation = useTranslation;
