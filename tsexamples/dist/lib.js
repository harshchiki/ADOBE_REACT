"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.forEach = void 0;
// HOF
function forEach(elems, action) {
    let i;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
exports.forEach = forEach;
// forEach([4,2,5,22], console.log)
// forEach([4,2,5,22], alert)
// HOF --> OCP
function filter(elems, predicate) {
    let result = [];
    forEach(elems, function (elem) {
        if (predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}
exports.filter = filter;
// filter([3,4,1,11], e => e % 2 === 0)
// HOF
function map(elems, transformFn) {
    let result = [];
    forEach(elems, function (elem) {
        result.push(transformFn(elem));
    });
    return result;
}
//  function memo<T,R>(fn:FunctionType<T,R>) {
//    var cache:{T: any,R: any} = {}; // cache is a closure; fn is a closure
//    return function(arg:T){
//       if(!cache[arg]) {
//          cache[arg] = fn(arg);
//       } 
//       return cache[arg];
//    }
//  }
