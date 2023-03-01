import {random} from 'lodash';

import {forEach, filter, memo} from './lib';

console.log(random(1, 100));
let data:number[] = [5,11,3,78,10];

interface Product {
  name: string;
  price: number;
  category: string;
}

var products:Product[] = [
    {name:"iPhone 14", price:98000.00, "category": "mobile"},
    {name:"Sony Bravia", price:198000.00, "category": "tv"},   
    {name:"Samsung Z fold", price:213000.00, "category": "mobile"},
    {name:"Oppo", price:28000.00, "category": "mobile"},
    {name:"iMacbook Pro", price:128000.00, "category": "computer"},
    {name:"HDMI", price:900.00, "category": "electronics"},
];

let evens:number[] = filter(data, e => e % 2 === 0);
let mobiles:Product[] = filter(products, p=> p.category === 'mobile');

forEach(evens, console.log);
forEach(mobiles, console.log);

// const memoFib = memo(fibanocci);
// console.time("a");
// console.log(memoFib(34));
// console.timeEnd("a");

// console.time("b");
// console.log(memoFib(34)); // issue ?
// console.timeEnd("b");

function fibonacci(num:number) : number {
  return (num == 0 || num == 1) ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

const memoFib = memo(fibonacci);
console.time("one");
console.log(memoFib(34));
console.timeEnd("one");

console.time("two");
console.log(memoFib(34));
console.timeEnd("two");