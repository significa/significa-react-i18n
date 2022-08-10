"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translation = void 0;
var react_1 = __importStar(require("react"));
var utils_1 = require("./utils");
var Translation = function (_a) {
    var id = _a.id, _b = _a.values, values = _b === void 0 ? {} : _b;
    var messages = (0, utils_1.useMessages)();
    var message = (0, utils_1.getMessage)(messages, id);
    var matches = (0, utils_1.getMatches)(message);
    var parts = (0, utils_1.getParts)(message);
    if (!matches) {
        return react_1.default.createElement(react_1.Fragment, null, message);
    }
    var matchedValues = (0, utils_1.parseMatchesForKey)(matches, id, values);
    var elements = parts.map(function (part, i) {
        return react_1.default.createElement(react_1.Fragment, { key: part + i }, matchedValues[part] || part);
    });
    return react_1.default.createElement(react_1.Fragment, null, elements);
};
exports.Translation = Translation;
