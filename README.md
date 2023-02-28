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


