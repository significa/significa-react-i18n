import { parseMatchesForKey, getMatches, getMessage, getParts, useMessages, } from './utils';
export var useTranslation = function () {
    var messages = useMessages();
    var t = function (id, values) {
        if (values === void 0) { values = {}; }
        var message = getMessage(messages, id);
        var matches = getMatches(message);
        var parts = getParts(message);
        if (!matches) {
            return message;
        }
        var matchedValues = parseMatchesForKey(matches, id, values);
        var elements = parts.map(function (part) {
            return matchedValues[part] || part;
        });
        return Array.isArray(elements) ? elements.join('') : elements;
    };
    return { t: t };
};
