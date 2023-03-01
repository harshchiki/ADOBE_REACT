type Person = {
    name: string
}

type ErrorMsg = {
    msg:string
}
// type predicate function [ is in return]
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

printData({"name": "Harry"});

printData({"msg": "Input not valid!!!"});
