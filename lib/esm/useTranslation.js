import { parseMatchesForKey, getMatches, getMessage, getParts, useMessages, } from './utils';
export var useTranslation = function () {
    var messages = useMessages();
    function t(key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var values = args[0];
        var message = getMessage(messages, key);
        var matches = getMatches(message);
        var parts = getParts(message);
        if (!matches || !values) {
            return message;
        }
        var matchedValues = parseMatchesForKey(matches, key, values);
        var elements = parts.map(function (part) {
            return matchedValues[part] || part;
        });
        return Array.isArray(elements) ? elements.join('') : elements;
    }
    return { t: t };
};
