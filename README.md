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

Promise.resolve("Test");

new Promise((resolve, reject) => {
    resolve("Test");
})

==========================

TypeScript and Webpack

npm i -g typescript

Why TS?
* Provides optional type system for JS.
* enhance code quality and readblity, understandability
* sort of documentation

var x = "test"; // string
x.toUpperCase();
x = 10; // number
x++;

Basic types: string, number, boolean

let name:string = "Danny";
name = 32; // tsc picks this error

a.ts ==> tsc a.ts ==> a.js [ execute this]

-------

1) type

type Person = {
    name:string;
    age?:number
}

let p:Person = {"name":"Smitha", "age": 24};

function addPerson(person:Person) {

}

addPerson({"name":"Smitha", "age": 24});
addPerson({"name":"Smitha"}); // valid because age is marked as optional

2) interface

2.1) to define a shape of object

interface Product {
    name:string;
    price?:number
}

can be extended

interface Tv extends Product {
    screen:string;
}

interface Mobile extends Product {
    connectivity:string;
}

let m:Mobile = {"name": "iPhone X", "price": 45000.00, "connectivity":"4G"};

2.2) interface for Realization relationship

interface Renderer {
    render():void;
}

// realization
class WebRenderer implements Renderer {
    // state and behaviour
    render():void {
        // logic to render to DOM
    }
}

class TvRenderer implements Renderer {
    // state and behaviour
    render():void {
        // logic to render to DOM
    }
}

let renderer:Renderer = new TvRenderer();
renderer.render();

==============

3) any 
let data:any = 10;
data = "sample";
data = true;

let data:any = getResponse(); // JS code

4) unknown

let data:unknown = 10;

Differences:
a) any type can be assigned to any other type
let data:any = 10;
let value:number = data; // valid

b) unknown type can be assigned only to another unknown type

c) before using unknown type; typechecking has to be done

===

tsexamples>tsc --init

tsconfig.json



Task ==> Convert map() to TS using Generics

======================

Type Predicate functions [ "is" ], "as" and "in" keyword

using "as" for type asserrtion:

```
type Person = {
    name: string
}

type ErrorMsg = {
    msg:string
}
// type predicate function [ is in return]
function isPerson(data:Person | ErrorMsg) : boolean {
    return "name" in data;
}

function isErrorMsg(data:Person | ErrorMsg) : boolean {
    return "msg" in data;
}

// union type |
function printData(data: Person | ErrorMsg): void {
    if(isPerson(data)) {
        console.log((data as Person).name);
    } else if(isErrorMsg(data)) {
        console.log((data as ErrorMsg).msg);
    }
}

printData({"name": "Harry"});

printData({"msg": "Input not valid!!!"});

```

Without TypeAssertion using Type predicate functions:
```
function isPerson(data:Person | ErrorMsg) : data is Person {
    return "name" in data;
}

function isErrorMsg(data:Person | ErrorMsg) : data is ErrorMsg {
    return "msg" in data;
}

// union type |
function printData(data: Person | ErrorMsg): void {
    if(isPerson(data)) {
        console.log(data.name);
    } else if(isErrorMsg(data)) {
        console.log(data.msg);
    }
}

```

Using JavaScript in TypeScript

npm i lodash

1)
using typings.d.ts

2) 
https://github.com/DefinitelyTyped/DefinitelyTyped

npm i -D @types/node

npm i -D @types/react

npm i -D @types/lodash

===========================

JavaScript Build tools
* Grunt
* Gulp
* Webpack

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.

React, Angular, Vue --> Scaffolding codes uses Webpack by default


webpackexample> npm init --y

webpackexample> npm i webpack webpack-cli webpack-dev-server typescript html-webpack-plugin -D

webpackexample> tsc --init

webpackexample> npm i css-loader style-loader ts-loader -D

babel-loader ==> ES6+ "js" --> lower version of "JS"

ts-loader => ts ==> js

css-loader ==> loads .css files imported in "js"

a.js
import "styles.css"

style-loader ==> place the loaded css into <style> </style> of html

index.ts ==> Person.ts, lib.ts [ Person.ts ==> Lib.ts], ...

Webpack creates a single bundle file ==> bundle.js ==> dist

index.html
<script src="lib.js"></script>
<script src="person.js"></script>
<script src="util.js"></script>

--> one network call per <script>, <link>
--> depdency order has to be maintained
--> FCP 

Solution:
<script src="bundle.js"></script>


import Product from './Product';

```
export default class Person {
    private name:string;
    private age:number;
    public constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}
```

npm run dev

asset bundle.js 6.16 KiB [emitted] (name: main)
./src/index.ts 1.95 KiB [built] [code generated]
./src/Person.ts 360 bytes [built] [code generated]
./src/lib.ts 1.01 KiB [built] [code generated]

npm run prod
asset bundle.js 1.85 KiB [emitted] [minimized] (name: main)
./src/index.ts 1.95 KiB [built] [code generated]
./src/Person.ts 360 bytes [built] [code generated]
./src/lib.ts 1.01 KiB [built] [code generated]


The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

<script src="./dist/bundle@42r255.js"></script>

<script src="./dist/bundle#56342r2gw.js"></script>

Browser caches the files

==> Lazy loading ==> many bundles will be created

npm run dev
npm run prod
npm start

---

TypeScript Utils => Pick, Partial, Required, ReturnType

Day 3:

React
Rendering ==> Data to Presentation

* Client Side Rendering
Pros:
Payload contains only represeentation of data [ XML / JSON/ RSS / CSV]
heterogenous client
Cons:
Heavy client

Examples of CSR: DOM handling with DOM aPi, jquery, Handlebars, Mustache, Underscore, Backbone, AngularJS, React, Angular, Vue

* Server Side Rendering
Pros:
Thin client
Cons:
Payload is more for every request
Can't have heterogenous client
Examples of SSR: PHP, Servlet & JSP, ASP, ASP.NET, Flask, EJS, PUG, JADE

----
DOM:
document.createElement()
document.getElementByID(..)
document.querySelector()

jQuery ==> simplified DOM handling and AJAX calls {similar to fetch}
XmlHttpRequest --> $.ajax("uri") --> fetch()

Templates -> static and dynamic content
Handlebars, Mustache, ...

<script id="mp_template" type="text/template">
    Date: {{ time }}
    <br>
    Time: {{ date }}
    <br>
    Unix time: {{ milliseconds_since_epoch }}
</script>

{{}} --> Interpolation syntax

SPA --> Single Page Application
index.html --> different views
different URLs different view
depednecy between modules [CustomerModule, ProductModule, CartModule, PaymentModule]
Secure URLs

Libraries and Framework:
MVC --> Model View Controller Archtetural pattern
* Backbone library --> Model and Controller support was provided; we need to choose differnent view templates
* 2010 --> Google --> AngularJS Framework 
* Around year 2011 Facebook started to explore new ways of rendering [already using MVC pattern]
Jordan Walke --> xhp for PHP
XML in JS ==> Search of Facebook 
Instagram

2014 --> Open Source --> First JS Conf --> big failure

return <div class=...>
    Name {name}
    Age {age}
</div>

CSS folder
JS folder
template folder

Khan academy, Netflix 

----------------------
VueJS 2014
Angular --> Google
React 18 version

https://codepen.io/

1) React createElement() Core API to create ReactElement

let Welcome = React.createElement("h1", {style:{'color':'red'}}, "Welcome to React");

React nodes are not real DOM nodes 
React nodes can be text or react element or array of react elements

createElement() returns a ReactElement

VDOM ==> Virtual DOM

Renderers for converting
Virutal DOM ==> DOM
https://github.com/chentsulin/awesome-react-renderer
react-dom
react-native
react-tv

<div id="app"></div>

ReactDOM.render(Welcome, document.getElementById("app"));

<div id="app">
    <h1 style={color:red}>
        Welcome to React
    </h1>
</div>

Code Pen:
JS
1) Pre-processor
Babel
2) CDN
a) react
https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js
b) react-dom
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js

Behaviour:
Turn off Save Automatically and update preview

Save & Close

Reconcillation ==> VDOM to DOM

<div>
    <h1>Hello</h1>
    <p>test</p>
</div>

React.createElement("div", null, [React.createElement("h1",null,"Hello"), React.createElement("p", null, "test"));

Simplifiy creation of React Element using:
1) functional component
2) class component

Functional Component:

returns XML
```
function Welcome() {
    return <h1>
             Welcome to React
    </h1>
}

ReactDOM.render(<Welcome />, document.getElementById("app"));

returns JSX

function Welcome(props) {
    return <h1>
             {props.msg} training in {props.place}
    </h1>
}

ReactDOM.render(<Welcome msg="Welcome to React" place="Virtual Trg" />, document.getElementById("app"));
Returned JSX is convered to React Element by BABEL

function Welcome({msg, place}) {
    return <h1>
             {msg} training in {place}
    </h1>
}
```

3) Class Component

-> extends Component class
-> can have state and behaviour

[state and props are keywords in React]
state --> internal values of component [ Button --> color, caption, size are state]
```
class Welcome extends React.Component {
  state = {
    data: 100
  }

  render() {
    return <div>
        Date {this.state.data} <br />
        Message: {this.props.msg} <br />
        Place : {this.props.place}
      </div>
  }
}
ReactDOM.render(<Welcome msg="Welcome to React" place="Virtual Trg" />, document.getElementById("app"));
```
In functional component JSX is returned
In class component render() returns JSX

Class Component
* If state is required
* Life cycle methods

99% is functional component

<Welcome /> ==> Heap area and state is stored [ data ]
<Welcome /> ==> Heap area and another copy state is stored [ data ]

class Test {
    getEmployee() {
        console.log(this);
    }

    getEmployee2 = () => {
        console.log(this);
    }

    getRef() {
        return {
            a: getEmployee.bind(this),
            b: getEmployee2
        }
    }
}

let obj = new Test();
let {a, b } = obj.getRef;
a(); // here context is lost

b(); // arrow functions will use enclosing context

==============
JavaScript:
function Welcome({msg}) {
     return <h1> Hello {msg} <h1>
}
<Welcome msg="Banu"/>

Functional Components in TypeScript

function Welcome({msg} :{msg?:string}):ReactElement {
    return <h1> Hello {msg} <h1>
}

or

type Props = {
    msg?:string,
    place?:string
}

function Welcome(props:Props):ReactElement {
    return <h1> Hello {props.msg} {props.place} <h1>
}

<Welcome/>
<Welcome msg="Banu" place="Virtual"/>

=======
Without create-react-app
1) npm init --y
2) npm i webpack webpack-cli html-webpack-plugin typescript @types/react @types/react-dom -D
3) npm i react react-dom
4) tsc init
5) webpack.config.js

create-react-app for scaffolding code

npm i -g create-react-app
create-react-app nameofapp

Now:
npx create-react-app nameofapp

css folder
js folder
template folder

React Approach:
components/customer [css and components]
components/product [css and components]



npx create-react-app customerapp --template typescript


========

tsx ==> component
ts ==> any other ts file

Entry point for Webpack is always "src/index.ts(x)" if not explicitly configured

https://claudiopro.github.io/react-fiber-vs-stack-demo/


<ul>
<li>Three</li>
 <li>1</li>
 <li>Two</li>
</ul>


Approach 1:
   this.state.customers.map(c => <CustomerRow 
                    delEvent ={this.deleteCustomer.bind(this)}
                    customer={c} 
                    key={c.id}/>)

Approach 2:
  constructor(props:Props){
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this)
        ///
  }

  this.state.customers.map(c => <CustomerRow 
                    delEvent ={this.deleteCustomer}
                    customer={c} 
                    key={c.id}/>)


Approach 3:
this.state.customers.map(c => <CustomerRow 
                    delEvent ={(id) => this.deleteCustomer(id)}
                    customer={c} 
                    key={c.id}/>)


Day 4
npx create-react-app customerapp --template typescript

Testing
React Component Testing --> Unit testing
E2E testing

RTL ==> react testing library 
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"@types/jest": "^27.5.2",

Prior to React 16 we used Enzyme + JEST

============================

End To End testing ==> E2E
* Protractor ==> Angular
* PlayWright
* WebDriver ==> Selenium for JS
* Puppetter
* Cypress

npm i cypress -D

Spring Boot / JS / PHP /..
http://localhost:3000/

package.json
  "e2e": "cypress open"

npm run e2e

==================================

Component Life Cycle methods for Class Components

Mounting:

constructor() ==> render() ==> componentDidMount()

* initiliaztion in constructor
* render with init data 
* Make Api calls in componentDidMount()

Importance ==> FCP ==> Core Web Vital ==> First Contentful Paint

Updating: 

whenever any state or props change
state or props change maybe by event handling or componentDidMount() gets new state from server and updates it

shouldComponentUpdate() --> returns true --> render() --> componentDidUpdate()
shouldComponentUpdate() --> returns false;

shouldComponentUpdate() is the method where we decide should re-render or not by checking props with new_props

componentDidUpdate() ==> Make APi calls based on dependendent data

Example:
componentDidMount() --> gets Orders
componentDidUpdate() --> I can get Delivery address for orders

UnMounting:
Before Component is destroyed
componentWillUnMount()

===
Example: How to avoid re-render of Child Component
```

class Parent extends React.Component {
  state = {
    name : "Peter",
    age: 30
  }
  increment() {
    this.setState( {
      age: this.state.age + 1
    })
  }
  render() {
    console.log("parent renders!!!");
    return <div>
          Age : {this.state.age} <br />
          <Child name={this.state.name}/> <br />
         <button onClick={() => this.increment()}>Change Age</button>
      </div>
  }
}

class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
      if(this.props.name === nextProps.name) {
        return false;
      }
    return true;
  }
  render() {
    console.log("child renders!!!");
    return <div>
      Name in Child: {this.props.name}
     </div>
  }
}
ReactDOM.render(<Parent />, document.getElementById("app"))

```

Example: How to avoid re-render of Child Component if it is Functional Component

```

class Parent extends React.Component {
  state = {
    name : "Peter",
    age: 30
  }
  increment() {
    this.setState( {
      age: this.state.age + 1
    })
  }
  render() {
    console.log("parent renders!!!");
    return <div>
          Age : {this.state.age} <br />
          <MemoChild name={this.state.name}/> <br />
         <button onClick={() => this.increment()}>Change Age</button>
      </div>
  }
}

function Child (props) {
    console.log("child renders!!!");
    return <div>
      Name in Child: {props.name}
     </div>
}

let MemoChild = React.memo(Child);
ReactDOM.render(<Parent />, document.getElementById("app"))

```
Abstract code for memo()
memo() is a HOC 
```
function memo(ChildComponent) {
    var props = {}; // like cache
    check new_props with closure props;
    return ChildComponent();
    or
    return;
}
```

Customization:
```
function checkDiff(props, newProps) {
    //logic
}

let MemoChild = React.memo(Child, checkDiff);

```

React Context
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

```
let PersonContext = React.createContext();

class PersonProvider extends React.Component {
  state = {
    name :"Jack",
    email:"jack@adobe.com",
    updateEmail:this.updateEmail.bind(this)
  }
  updateEmail(em) {
    console.log(em)
    this.setState({
      email:em
    });
  }
  
  render() {
    return <div>
      <PersonContext.Provider value={this.state}>
        <App />
      </PersonContext.Provider>
     </div>
  }
}

function App() {
  return <div>
    <h1>I am App!!!</h1>
    <First />
    </div>
}

function First() {
  return <div>
    <h1>I am First !!!</h1>
    <Second />
    </div>
}

class Second extends React.Component {
  
  render() {
    return <div>
        <PersonContext.Consumer>
          {
            value => {
              return <div>
                  <h3> I Am Second !!! </h3>
                    Name : {value.name} <br />
                    Email : {value.email} <br />
                <button onClick={() => value.updateEmail("me@gmail.com")} type="button">Change Email </button>
               </div>
            }
          }
         </PersonContext.Consumer>
     </div>
  }
}
ReactDOM.render(<PersonProvider />, document.getElementById("app"))
```

React Hooks 
Hooks are a new addition in React 16.8. 
They let you use state and other React features without writing a class.

Prior to 16.8
Class Component:
1) state
2) lifeCycleMethods

Function Component: only view components
---
Class Components are heavy --> extends Component

1) useState
```
class App extends Component {
    state = {
        name: "",
        count: 0
    }

    setCount(n) {
        this.setState({
            count: n
        })
    }

    setName(n) {
        this.stateState({
            name:n
        })
    }
}
```
using Hook:
```
function App() {
  let [count, setCount] = React.useState(0);
  let [name, setName] = React.useState("test");
  
  function handleClick() {
    setCount(count + 1);
  }
  
  return <>
    Count : {count} <br />
    Name : {name} <br />
    <button onClick={() => handleClick()}>Change</button>
  </>
}
ReactDOM.render(<App />, document.getElementById("app"))

```

2) useEffect hook works similar to component Life methods

```
function App() {
  let [count, setCount] = React.useState(0);
  let [name, setName] = React.useState("test");
  
  function handleClick() {
    setCount(count + 1);
  }
  
  React.useEffect(() => {
    console.log("similar to componentDidMount ");
    return () => console.log("UnMount!!!")
  },[]);
  
  React.useEffect(() => {
    console.log("called whenever any state or props  changes!!! ==> Similar to componentDidUpdate")
  });
  
   React.useEffect(() => {
    console.log("called whenever count changes!!!")
  },[count]);
  
  return <>
    Count : {count} <br />
    Name : {name} <br />
    <button onClick={() => handleClick()}>Change</button>
  </>
}
ReactDOM.render(<App />, document.getElementById("app"))
```

3) useReducer
4) useContext
5) useParams
6) useCallback
....



