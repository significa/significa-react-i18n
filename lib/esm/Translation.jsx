import React, { Fragment } from 'react';
import { getMatches, getMessage, getParts, parseMatchesForKey, useMessages, } from './utils';
export var Translation = function (_a) {
    var id = _a.id, _b = _a.values, values = _b === void 0 ? {} : _b;
    var messages = useMessages();
    var message = getMessage(messages, id);
    var matches = getMatches(message);
    var parts = getParts(message);
    if (!matches) {
        return <Fragment>{message}</Fragment>;
    }
    var matchedValues = parseMatchesForKey(matches, id, values);
    var elements = parts.map(function (part, i) {
        return <Fragment key={part + i}>{matchedValues[part] || part}</Fragment>;
    });
    return <Fragment>{elements}</Fragment>;
};
