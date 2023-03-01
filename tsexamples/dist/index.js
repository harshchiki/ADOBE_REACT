"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const lib_1 = require("./lib");
console.log((0, lodash_1.random)(1, 100));
let data = [5, 11, 3, 78, 10];
var products = [
    { name: "iPhone 14", price: 98000.00, "category": "mobile" },
    { name: "Sony Bravia", price: 198000.00, "category": "tv" },
    { name: "Samsung Z fold", price: 213000.00, "category": "mobile" },
    { name: "Oppo", price: 28000.00, "category": "mobile" },
    { name: "iMacbook Pro", price: 128000.00, "category": "computer" },
    { name: "HDMI", price: 900.00, "category": "electronics" },
];
let evens = (0, lib_1.filter)(data, e => e % 2 === 0);
let mobiles = (0, lib_1.filter)(products, p => p.category === 'mobile');
(0, lib_1.forEach)(evens, console.log);
(0, lib_1.forEach)(mobiles, console.log);
// const memoFib = memo(fibanocci);
// console.time("a");
// console.log(memoFib(34));
// console.timeEnd("a");
// console.time("b");
// console.log(memoFib(34)); // issue ?
// console.timeEnd("b");
function fibonacci(num) {
    return (num == 0 || num == 1) ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
const memoFib = (0, lib_1.memo)(fibonacci);
console.time("one");
console.log(memoFib(34));
console.timeEnd("one");
console.time("two");
console.log(memoFib(34));
console.timeEnd("two");
