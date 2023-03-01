"use strict";
function unknownFn(arg) {
    if (typeof arg === 'function') {
        arg();
    }
    else if (typeof arg === 'string') {
        console.log(arg.toUpperCase());
    }
}
unknownFn("Hello World!!!");
