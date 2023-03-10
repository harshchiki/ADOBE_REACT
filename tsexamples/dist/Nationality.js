"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nationality = void 0;
// decorator factory
function Nationality(config) {
    return function (constructor) {
        Object.defineProperty(constructor.prototype, "country", {
            "value": config.nation
        });
    };
}
exports.Nationality = Nationality;
