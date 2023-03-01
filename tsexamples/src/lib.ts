// HOF
export function forEach<T>(elems:T[], action:(elem:T) => void) :void  {
    let i:number;
    for(i = 0; i < elems.length; i++) {
       action(elems[i]);
    }
 }

// forEach([4,2,5,22], console.log)
// forEach([4,2,5,22], alert)

 // HOF --> OCP
 export function filter<T>(elems:T[], predicate:(elem:T) => boolean): T[] {
    let result:T[] = [];
    forEach(elems, function(elem) {
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
 }

 // filter([3,4,1,11], e => e % 2 === 0)
// HOF
//  function map(elems, transformFn) {
//    let result = [];
//    forEach(elems, function(elem) {
//       result.push(transformFn(elem))
//    });
//    return result;
//  }

//  function memo(fn) {
//    var cache = {}; // cache is a closure; fn is a closure
//    return function(arg){
//       if(!cache[arg]) {
//          cache[arg] = fn(arg);
//       } 
//       return cache[arg];
//    }
//  }


