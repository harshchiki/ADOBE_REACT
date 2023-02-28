// HOF
function forEach(elems, action) {
    for(i=0; i < elems.length; i++) {
       action(elems[i]);
    }
 }


 // HOF --> OCP
 function filter(elems, predicate) {
    let result = [];
    forEach(elems, function(elem) {
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
 }

// HOF
 function map(elems, transformFn) {
   let result = [];
   forEach(elems, function(elem) {
      result.push(transformFn(elem))
   });
   return result;
 }

 function memo(fn) {
   var cache = {}; // cache is a closure; fn is a closure
   return function(arg){
      if(!cache[arg]) {
         cache[arg] = fn(arg);
      } 
      return cache[arg];
   }
 }

 module.exports = {
    forEach,
    filter,
    map,
    memo
 }
