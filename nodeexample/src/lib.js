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


 module.exports = {
    forEach,
    filter
 }
