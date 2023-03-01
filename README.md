# REACT

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/ADOBE_REACT



Softwares Required:

Visual Studio Code.

Chrome Web Browser

NodeJS Latest LTS

=============

NodeJS --> platform built on V8 JavaScript engine, uses event driven non blocking I/O model

JS --> JS engines [ V8 by Google -chrome and NodeJs, SpiderMonkey, JavaScriptVM, Chakra, Nashorn ]

Java --> JVM

https://github.com/nodejs/node

libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops.

What WebApi is to Browser [ setInterval()], libuv is to nodeJS [setInterval()]
* Libuv provides Thread Support, Timers, fs

file.js

console.log("Hello!!");

setInterval(function task() {
    console.log("timed!!!");
}, 100);

// assume there is a button by id "btn"

$("#btn").click(function clicked() {
    console.log("clicked!!!");
});

console.log("Bye!!!");


Libuv

class TimerThread extends Thread {
    TimerThread(CallbackQueue q, Method m, long duration) {...}

    public void run() {
        while(true){
            Thread.sleep(duration);
            q.push(m);
        }
    }
}

Libuv provides Thread pool -> 4 Threads --> 2 CPUs {ContextSwitching}

5th comes up ==> ArrayBlockingQueue

Event Loop --> one Thread

function a() {
    b();
}

function b() {
    c();
}

function c() {
    ...
}

Different Module Systems:
1) VanillaJS Module System
2) CommonJS module system <-- default nodejs
How to import a module ==> require("modulename");
3) ES6 module system <-- TypeScript
How to import a module
import module from 'module';

https://www.jsv9000.app/

```
console.log("Hello");

setTimeout(function one() {
    console.log("1");
}, 0);

setTimeout(function two() {
    console.log("2");
}, 0);

Promise.resolve().then(function p1() {
    console.log("p1");
});

Promise.resolve().then(function p2() {
    console.log("p2");
});


console.log("Bye");

```

Within CallbackQueue we have MacroTask Queue and MicroTaskQueue:
timers, fs, os callback {close event of file} ==> MacroTask
Promise --> MicroTask queue

Always Event loop empties MicroTask queue before handling macrotask queue

------------------

Understanding of NodeJS project

node package managers:
1) NPM [default]
2) YARN
npm install -g yarn
3) PNPM
npm install -g pnpm

Simlar to Maven / Gradle / PIP
--> manage dependencies [ repository]
example: npm i react
or yarn add react
or pnpm i react

npm config list

npm config get registry
https://registry.npmjs.org/
https://www.npmjs.com/

npm config set registry=https://abobe.com:9099/proxy

--> to publish a module
npm publish

--> to run scripts
npm start
npm test


To initialize a Node Project
nodeexample>npm init --y

this creates a package.json
-> configure scripts
-> all dependecies, devDependencies and peerDependecnies are configured here

--> Development dependecies ==> modules not required in final production bundle
lik testing related, linting related, compilers 

nodeexample> npm i lodash
nodeexample> npm i -D jest mocha chai

every nodeproject contains "node_modules" place where 3rd party dependecies are installed.

built-in :fs, http, crypto, url, cluster --> loaded by default

similar to ".m2" 

Only executable global modules are in root
 npm root -g  
 /usr/local/lib/node_modules

 npm i -g typescript

 from any terminal $ tsc


 ==========

 Functional Style of Programming: ==> Code Reusability ==> OCP ==> Open for extension and closed for change
 High Order Functions:
 1) Functions which accept function as argument
 2) function which return a function

 
 function forEach(elems) {
    for(i=0; i < elems.length; i++) {
        console.log(elems[i]);
    }
 }


 function forEach(elems) {
    for(i=0; i < elems.length; i++) {
        alert(elems[i]);
    }
 }

HOF:

 function forEach(elems, action) {
    for(i=0; i < elems.length; i++) {
       action(elems[i]);
    }
 }

forEach([5,2,11,5], console.log);
forEach([5,2,11,5], alert);


Commonly used HOF:
filter, map, reduce

Filter ==> return a subset based on predicate function [true or false]
in node js one file is one module; all members are private to module until its exported

npm start

========

Unit testing JavaScript
Testing Frameworks:
1) Jasmine
2) Mocha
3) JEST

E2E testing: Puppetter, Cypress, Protractor, webdriver{selenium}, PlayWright

AAA ==> Assemble Action Assert

Chai is a BDD / TDD assertion library 

==========

HOF ==> function return a function

function adder(base) {
    return function (value) {
        return base + value;
    }
}

var fiveAdder = adder(5);

var tenAdder = adder(10);


Closure ==> inner functions can access all the members of outer function

for fiveAdder ==> base:5 is a closure
for teAdder ==> base:10 is a closure

--> Memoization pattern

memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

ECMA2015 ==> JS2015 ==> ES 6 ==> JS 6

Most of the engines support ES 5

Write code in ES 6, TS, CoffeeScript, LiveScript, DART

Pre-processor, Transpiler, trans-compiler

Babel ==> transpiler for ES 6+ to lower version of JS
TSC ==> .ts ==> .js
csc ==> .cs ==> .js

https://caniuse.com/

Pollyfill
A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support.

ES 6 Features:

1) Arrow
2) let and const for declaring scope variables
ES 5 supports only global and function scopes not block scope
var g = 100;
function doTask() {
    var a = 10;
    if(g > a) {
        var b = 30; // hoisting
        // here a, g, b are visible
    }
    // here am b and g are visible
}
doTask();
// here g is visible

JS creation context

function doTask() {
    var a = 10;
    var b; // hoisting
    if( g > a) {
        b = 30;
    }

---
With ES 6+
function doTask() {
    var a = 10;
    if(g > a) {
        let b = 30; // block scope and not hoisted
        // here a, g, b are visible
    }
    // here am b and g are visible 
}

function doTask() {
    var a = 10;
    if(g > a) {
        (
            var b = 30;
        )();
    }
    // here am b and g are visible 
}

3) Destructuring and spread operator [...]

let product =  {name:"iPhone 14", price:98000.00, "category": "mobile"};

ES 5 way:
console.log(product.name, product.price);

ES 6 way:
let {name, price} = product; // name and price will be local variables

console.log(name, price); 

var colors = ["red", "green", "blue", "pink"];

var [r,g,...others] = colors;

console.log(r); // red
console.log(others); ["blue", "pink"];

4) Using Spread operators to copy

var elems = [45,10];

var data = [...elems, 24]; // take a copy of elems and add "24" to copy

data = elems; // reference

let product =  {name:"iPhone 14", price:98000.00, "category": "mobile"};

let cpy = {...product}; // clone not ref

let ref = product; // reference

Day 2:

Recap --> NodeJs {V8 JS engine + Libuv C / C++ libraries for Async I/O operations and Event loop}
NPM as package manager ==> dependencies and devDependencies {Liniting, Testing, Compiler}

package.json
node_modules {3rd party dependencies are downloaded here when npm install command is used}

Global modules --> only executables and not libraries
npm root -g

Testing --> Unit testing with JEST, Chai.js --> Assertion library

HOF
1) function accepts function as argument ==> OCP ==> filter, map, forEach, reduce, ..
2) function returns a function ==> Closure ==> Memoization pattern

ES2015 / ES 6/ JavaScript 6

1) Arrow operator
2) let and const
const PI = 3.14159; 
PI = 4.1; // error

let & const has block-level scope; if used at global level or function level it works same as "var"

3) Destructring and spread operators

Day 2:

4) Promise API

Asynchronous operations

Synchronous Code:
let ret = doTask(); // blocking code
console.log("Bye!!!"); // can be executed only after doTask() completes

Asynchronous Code using Promise
Assume DoTask() returns Promise

doTask().then(
    (data) => console.log(data),
    (err) => console.log(err)
);


console.log("Bye!!"); // this code is not blocked, can execute befire doTask() completes

Example 1:
```
function doTask() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("All Good !!!");
            // reject("404 not found");
        }, 2000);
    })
}

doTask().then(
    (data) => console.log(data),
    (err) => console.log("Boom :-(", err)
)
console.log("End!!!");
```

fetch("https://jsonplaceholder.typicode.com/users") // Promise
.then(response => response.json()) // Promise
.then(data => console.log(data))

Callback Hell:
getConnection()
.then(con => getProjects(con))
.then(proj => getEmployees(proj))
.then(employees => getEmail(employees));

5) Async and Await
syntactical sugar of way you use Promise API

6) Generators
return multiple values over a timeline


