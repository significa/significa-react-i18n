"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translation = void 0;
var react_1 = require("react");
var utils_1 = require("./utils");
var Translation = function (_a) {
    var id = _a.id, _b = _a.values, values = _b === void 0 ? {} : _b;
    var messages = (0, utils_1.useMessages)();
    var message = (0, utils_1.getMessage)(messages, id);
    var matches = (0, utils_1.getMatches)(message);
    var parts = (0, utils_1.getParts)(message);
    if (!matches) {
        return <react_1.Fragment>{message}</react_1.Fragment>;
    }
    var matchedValues = (0, utils_1.parseMatchesForKey)(matches, id, values);
    var elements = parts.map(function (part, i) {
        return <react_1.Fragment key={part + i}>{matchedValues[part] || part}</react_1.Fragment>;
    });
    return <react_1.Fragment>{elements}</react_1.Fragment>;
};
exports.Translation = Translation;
