import { Nationality } from "./Nationality";

@Nationality({
    nation:'India'
})
export default class Person {
    constructor(private name:string, private age: number){}
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

// Resume @ 11:10

