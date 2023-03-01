export default class Person {
    public constructor(private name:string = "", private age:number = 0) {
    }

    getName():string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    setName(name:string) : void {
        this.name = name;
    }
}