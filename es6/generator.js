function* generatorFn() {
    console.log("one");
    console.log("two");
    yield {"name": "A", "age": 24};
    console.log("three");
    yield "Some Data!!!";
    console.log("four");
    console.log("five");
    yield true;
    console.log("six");
}

let iter = generatorFn(); 
console.log(iter.next());
console.log("logic!!");
console.log(iter.next());
console.log("logic 2");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());