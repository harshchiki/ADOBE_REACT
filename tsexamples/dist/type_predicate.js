"use strict";
// type predicate function [ is in return]
function isPerson(data) {
    return "name" in data;
}
function isErrorMsg(data) {
    return "msg" in data;
}
// union type |
function printData(data) {
    if (isPerson(data)) {
        console.log(data.name);
    }
    else if (isErrorMsg(data)) {
        console.log(data.msg);
    }
}
printData({ "name": "Harry" });
printData({ "msg": "Input not valid!!!" });
