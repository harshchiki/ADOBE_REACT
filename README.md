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

https://facebook.github.io/flux/docs/videos



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

Day 5
Context: React Context ==> to avoid props drill; Provider; Consumer ==> React 16.6
Hooks ==> React 16.8 ==> Goal is use Functional Component instead of class Components
* useState to declare state variables in functional component
--> state variable, mutation function; internal mechanism forces reconcillation [like setState()]
let [name, setName] = useState<string>("");

think setName internally triggers reconcillation
setName("George")

{name} 

* useEffect to simulate life-cycle methods of class components
componentDidMount(); compunentDidUpdate() and componentWillUnmount()

shouldComponentUpdate() --> React.memo()

useEffect(() => {}) // componentDidUpdate
useEffect(() => {}, []) // componentDidMount
useEffect(() => {}, [name]) // gets called whenever "name" changes

useEffect(() => {
    return () => {} // same as componentWillUnmount()
}, []) // componentDidMount

Hooks contd..
4) useReducer
is a hook to be used instead of useState() if
4.1) mutation depends on previous state
4.2) conditinally mutate a state

Example: Cart state --> Add To Cart; Increment quantity; remove from cart; clear cart

Actions --> ADD_TO_CART, INCREMENT, REMOVE_FORM_CART, CLEAR_CART

Action Object is one which is of format 
{type: ACTION_TYPE, payload: product}
{type: INCREMENT, payload: 3}
{type: REMOVE_FROM_CART, payload: 3}
{type: CLEAR_CART}

Example: INCREMENT, DECREMENT a count: number state 
A reducer function is one which takes state and action; returns the mutated state {new state}

let countReducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT": 
            return {count: state.count + action.payload};
        case "DECREMENT": 
            return {count: state.count - 1};
        default: return state;
    }
}


let initialState = {
    count : 0
}

In fuctional Component

function App() {
    let [state, dispatch] = useReducer(countReducer, initalState);


    function handleIncrement() {
        dispatch({type:"INREMENT", payload: 10});
    }

     function handleDecrement() {
        dispatch({type:"DECREMENT"});
    }

}

MobileApp:
1) axios -- js library to make API calls like "fetch()"
2) json-server --> Mocking RESTful Webservices 
this treats "json file" as persistance store

data.json
{
    "movies": [
        {id: 1, name :"A", "genre": "action"},
        {id: 2, "name": "B", "genre": "comedy"}
    ],
    "actors": [
        {
            id: 23,
            name : "X"
        }.
        {
            id:54,
            name: "Y"
        }

    ]
}

npx json-server --watch data.json --port 1234

http://localhost:1234/movies // fetch all
http://localhost:1234/movies/2  // by id ==> single sub-resource
http://localhost:1234/movies?genre=comedy // sub-set --> filter

http://localhost:1234/actors

3) react-router-dom v6 for client side routing
npm i react-router-dom

A Single Page Application [ SPA ] ==> one html ==> index.html but different views for different URLs
http://localhost:3000/
will display landing page
http://localhost:3000/products
prodcuts page
http://localhost:3000/details/4
a single product with details
http://localhost:3000/cart
....

--> implement LazyLoading of Components

4) CSS framework ==> Bootstrap for RWD {Response Web Design}
page adopt for different devices and resolution

* Grid System
* navbar
* card
* button

5) fontawesome --> icons
6) fortawesome --> react components for icons

====
Mobileapp:
npx create-react-app mobileapp --template typescript
npm i axios bootstrap react-bootstrap react-router-dom @fortawesome/react-fontawesome
@fortawesome/free-solid-svg-icons

index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';

1) react-router-dom

<Nav.Link as={Link} to="/cart">Cart</Nav.Link> ==> Client side Routing

instead of <a href="/cart"> Cart </a> ==> server side routing

Below component fails --> need to have a root tag; can't return multiple nodes
function Test() {
    return <h1> A</h1>
            <h2>B</h2>
}

Solution:
function Test() {
    return <div> 
            <h1> A</h1>
            <h2>B</h2>
         </div>
}

leads to <div> polluting

React.Fragment --> just to wrap react nodes --> no UI component
function Test() {
    return <React.Fragment> 
            <h1> A</h1>
            <h2>B</h2>
         </React.Fragment>
}
short-form for react fragment
function Test() {
    return <> 
            <h1> A</h1>
            <h2>B</h2>
         </>
}
-----

bundle.js contains all the components of react ==> FCP ==> First Contentful Paint
<script src="bundle.js"></script>
until bundle.js is downloaded into broweser nothings comes up on screen ==> FCP issues

Solution: divide components into multiple bundles and implement lazy loading....

---

extract images.zip into "mobileapp/public/images" folder

created data.json with 2 endpoints /orders and /products

npx json-server --watch data.json --port 1234
http://localhost:1234/products
http://localhost:1234/orders

React --> Make api call to RESTful web services to fetch products

fetch products by RESTful --> place it into context

index.tsx
root.render(
  <ProductProvider>
    <App />
  </ProductProvider>
);

React Developer tools to inspect ProductProvider

=================================
https://facebook.github.io/flux/docs/videos


Day 6

Application using Hooks and ReactContext, react-router-dom

bundle.js
FCP core web vitals --> code splitting and lazy loading

Fake RESTful WS
npx json-server --watch data.json --port 1234

Chrome Web Store
1) React Development Tools
2) Redux DevTools




In Class component ==> ContextConsumer

render() {
return <ProductContext.Consumer>
    {
        value => {
            // use the value {what is there in context}
        }
    }

</ProductContext.Consumer>

In functional Component we have useContext() hook for Consumer
useContext is a React Hook that lets you read and subscribe to context from your component.

use Props ==> to pass on data in one/two level

* UserContext ==> user logins --> user avatar and name
* ProductContext
* CartContext
ADD_TO_CART
REMOVE_FROM_CART
INCREMENT
DECREMENT
CLEAR_CART

can;t use useState() ==> useReducer()


window.sessionStorage.setItem("user","banu@lucidatechnologies.com");



```
useParams(); is for Path Parameter http://localhost:1234/products/3
useSearchParams();

Pagination: http://localhost:1234/products?page=1&size=10
Filter: http://localhost:1234/products?category=tv

let [searchParams, setSearchParams] = useSearchParams();
  
    let page = searchParams.get("page");
    let size = searchParams.get("size"); 
  
```

Handling Form Data:
1) Controlled Component
2) Uncontrolled Component

Controlled Component:
let [name, setName] = useState("");
<input type="text" onChange={(evt) => setName(evt.target.value)}>
In a controlled component, form data is handled by a React component.

Uncontrolled Component :instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
<input type="text" ref={nameRef} />
using  nameRef I can access data from FORM elements when required

Click on Button ==> one event

ProductForm.tsx using Controlled Component
```
import axios from "axios";
import { useState } from "react"
import { Button } from "react-bootstrap";

export default function ProductForm() {
    let [name, setName] = useState<string>();
    let  [description, setDesc]  = useState<string>();
    let [price, setPrice] = useState<number>();
   
    function submit() {
        let product = {
            "productDescription":description,
            "productImageUrl": "/images/iphone-x-in-hand.jpg",
            "productName": name,
            "productPrice": price,
            "productQuantity": 5,
            "productSeller": "Apple"
        }

        axios.post("http://localhost:/1234/products", product).then(response => {
            console.log("Product added!!!");
            // update the ProductContext also
        });
    }

    return <div className="container">
        Name <input type="text" onChange={(evt) => setName(evt.target.value)}/> <br />
        Description <input type="text" onChange={(evt) => setDesc(evt.target.value)}/> <br />
        Price <input type="number" onChange={(evt) => setPrice(+evt.target.value)}/> <br/>
        <Button type="button" onClick={() => submit()}>Add Product</Button>
    </div>
}
```

React Hooks:
1) useState
2) useReducer ==> state needs previous state and conditionally mutate the state
3) useParams()
4) useContext()
5) useSearchParams()
6) useEffect()
7) useMemo() ==> memoization of function call
different from React.memo() ==> HOC to memozie the props of functional component
to avoid re-render
8) useCallback() ==> is to memoize the callback function
without useCallback:
```
function Child(props) {
    console.log("Child renders...");
   return <button onClick={props.handleClick}>{props.children}</button>
}

let MemoChild = React.memo(Child);

function App() {
  console.log("Parent renders...");
  let [count, setCount] = React.useState(0);
  let [name, setName] = React.useState("test");
  
  function incrementCount() {
    setCount(count + 1);
  }
  
  function changeName() {
    setName(name + "..");
  }

  return <>
    Count : {count} <br />
    Name : {name} <br />
    <MemoChild handleClick={incrementCount}>Child 1</MemoChild>
    <MemoChild handleClick={changeName}>Child 2</MemoChild>
  </>
}
ReactDOM.render(<App />, document.getElementById("app"))

```

With useCallback

```
function Child(props) {
    console.log("Child renders...");
   return <button onClick={props.handleClick}>{props.children}</button>
}

let MemoChild = React.memo(Child);

function App() {
  console.log("Parent renders...");
  let [count, setCount] = React.useState(0);
  let [name, setName] = React.useState("test");
  
  const incrementCount = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);
  
  const changeName  = React.useCallback(() => {
    setName(name + "..");
  },[name]);

  return <>
    Count : {count} <br />
    Name : {name} <br />
    <MemoChild handleClick={incrementCount} >Child 1 </MemoChild>
    <MemoChild handleClick={changeName} >Child 2</MemoChild>
  </>
}
ReactDOM.render(<App />, document.getElementById("app"))

```

Day 7

Controlled Components and Uncontrolled Components

Hooks:
1) useState
2) useEffect
3) useReducer
4) useContext
5) useCallback
6) useParams
7) useSearchParams
8) useNavigate
9) useRef

Custom Hooks ==> build hooks on top of existing hooks; starts with "use"
https://react-spectrum.adobe.com/react-spectrum/

type Props<T> = {
    data:T[] | null;
    done: boolean
}
function useRestCall<T>(url:string): Props<T> {
    const [data, setData] = useState<T|null>(null);
    const [done, isDone] = useState<boolean>(false);

    useEffect(() => {
        // check if data is there in window.localStorage ==> if present no API call
        // setData(window.localStorage.getItem("products")); ==> PWA
        (asyc () => {
            let response = await  fetch(url);
            let data = await response.json();
            setData(data);
            isDone(true);

        })();
    }, [url]);

    return {
        data,
        done
    }
}


function MyComp () {
    let {data, done} = useRestCall<Product>("http://localhost:1234/products");
}

============

Errorboundary

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

<ErrorBoundary>
    <A/>
    <B/>
    <C/>
</ErrorBoundary>

<ErrorBoundary>
    <D/>
    <E/>
</ErrorBoundary>
```

HOC ==> High Order Components
Component accepts component as argument and returns a Component
* Inject new state and props
* Conditionally render a component
function Child() {...}
let MemoChild = React.memo(Child);

```
const ChartArea = ({name}) => {
    return <div className="chart">
        {name}
        {count}
    </div>
}

const TableArea = () => {
    return <table>
        <tr> ...</tr>
    </table>
}

Both the above components needs Counter mechanism

function clickCounterHOC (WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            this.state = {
                count: 0
            };
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState({count: this.state.count + 1})
        }

        render() {
            return <div onClick={this.handleClick}>
                    Count : { this.state.count} <br />
                    <WrappedComponent {...this.props} {...this.state}>
            </div>
        }
    }
}

let ChartAreaWithHOC = clickCounterHOC(ChartArea);

<ChartAreaWithHOC name="Adobe">
```

Predictable State Managment:

Context ==> Avoid this as state management for bigger application
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

User login ==> store User Profile data in Context ==> use it accross component
Dan Abramov

Issues:
1) Time-Travel Debugging
2) Statemangement needs to externalized [ separate module]
3) MicroFrontend: https://micro-frontends.org/


2011 In Facebook 
* React for Search feature
* Implementing Chat feature

Flux Pattern for State Management

In Flux:
store has state; store has all the subscriptions; whenever state changes --> emit(event, payload)
views which are registered for event gets latest data as payload

Flux pattern -==> we can have multiple stores

Dan Abramov ==> Redux

Redux Characters:
1) Action 
object with {type:...,payload:..}
2) ActionCreator
function addToCart(product) {
    return {
        type : "ADD_TO_CART",
        payload: product
    }
}
3) Store --> Redux has single store
4) RootReducer
5) Reducer


react-redux --> connect

connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

function mapStateToProps(state) {
    return {
        products: state->state.items,
        cart: state->state.cartItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (p) -> dispatch({type:ADD_TO_CART, payload:p}),
        increment: (id) -> dispatch({type:INDREMENT, payload: id})
    }
}

state = {
    items: [...],
    cart: [...]
}



===

npx create-react-app reduxexample

reduxexample> npm i redux react-redux

====

Mobileapp-REDUX:
removed CartReducer.ts and CartContext.tsx
index.tsx removed CartProvider
Redux toolkit [ RTK ] => The official, opinionated, batteries-included toolset for efficient Redux development

by using RTK --> we can eliminate lots of code like connect(), actioncreators, reducers

react-redux hooks:  we can use hooks for mapStateToProps and mapDispatchToProps


npm i react-redux @reduxjs/toolkit

As createSlice creates your actions as well as your reducer for you, you don't have to worry about type safety here. Action types can just be provided inline:


const Countslice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state, action) => state - action.payload
  },
})

const ProductSlide = createSlice( {
    reducers: {
        addProduct: ...
        removeProduct: ..
    }
})

const CartSlice = ...



// now available:
slice.actions.increment(2)
action type will be: "test/increment"

// also available:
slice.caseReducers.increment(0, { type: 'increment', payload: 5 })


RTK passes copy of state to addToCart and not reference; any changes done to copy it automaitically
updates the state in store.

Below code is done by Immer.js
Place a Proxy method on the below code
state ==> copy state 
pass it to addToCart
    addToCart: (state, action: PayloadAction<ICart>) => {
                state.cart.push({...action.payload});
    },
Proxy will pass the state to store

react-redux hooks:
useSelector() is a hook: The selector is approximately equivalent to the mapStateToProps argument to connect

useDispatch() hook: approximately equivalent to the mapDispatchToProps argument to connect

===

CartContext ==> Sync Redux
ProductContext ==> Async Redux

Mobx, MST

=============

Day 8

Predictable State Management:
instead of react managing the state in ReactContext {not meant to be state mangement}

* Flux
* Redux
* Mobx

Redux:
* Single Store where state is managed
* Reducers ==> (state,action) ==> copy state, mutate and return new state
CartReducer, UserReducer, ProductReducer, PaymentReducer,...
* RootReducer ==> combineReducers({...})
* react-redux has connect() HOC used to connect redux <--> React
mapStateToProps and mapDispatchToProps
* View dispatch(action) ==> store ==> passes action & state to RootReducer, RootReducer passes them to each of reducers; returned value for reducer is sent to store to update. store passes state to SmartComponent { connect()(App) }

RTK ==> ReduxToolkit ==> simplifies way you use Redux
 "@reduxjs/toolkit": "^1.9.3", ==> instead of "redux"
 "react-redux": "^8.0.5",

MobileApp:
removed CartReducer and CartContext


const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));


// instead of createStore()
// devTools:true by default
const store = configureStore({
    // combineReducers
    reducer:{
        cart: cartReducer,
    }
});

====

React-Redux Hooks:
useSelector() ==> mapStateToProps()
and useDispatch() ==> mapDispatchToProps()

index.tsx
```
root.render(
  <Provider store={store}>
  <ProductProvider>
      <App />
  </ProductProvider>
  </Provider>
);
```

npx json-server --watch data.json --port 1234

Async Redux

Redux is Synchronous
view -> dispatch(action) --> update the store --> view gets new state from store --> re-renders

Api calls are asynchronous

getUsers() {
    axios.get(URL)
}
dispatch(getUsers())
    --> state will have
        loading: true,
        users: [],
        error: null
    --> once getUsers() executes successfully
        loading:false,
        users: [...],
        error: null
    --> if any exception in getUsers()
        loading:false,
        error: errorMessage
        users:[]

when loading ==> <Spinner />
if successfull: <Users />
if error : <Error />

Redux uses middleware for Async:
* Thunk
* Saga
* redux-observable

https://redux.js.org/tutorials/fundamentals/part-6-async-logic
https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk


const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId: number) => {
    const response = await fetch(`https://reqres.in/api/users/${userId}`)
    // Inferred return type: Promise<MyData>
    return (await response.json()) as MyData
  }
)
View:
dispatch(fetchUserById(2))
dispatch({type:, payload})

onst usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false
    entities: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
     builder.addCase(fetchUserById.pending, (state, { payload }) => {
        loading = true;
    })
    builder.addCase(fetchUserById.fulfilled, (state, { payload }) => {
     loading = false;
     entitites = payload
    })
    builder.addCase(fetchUserById.rejected, (state, {payload}) => {
      loading = false;
      error = payload
    })
  },
})


