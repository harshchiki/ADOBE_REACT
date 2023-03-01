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
 function map<T, R>(elems:T[], transformFn:(elem:T) => R):R[] {
   let result:R[] = [];
   forEach(elems, function(elem) {
      result.push(transformFn(elem))
   });
   return result;
 }

 type FunctionType<T,R> = (arg:T) => R;
 
 interface Cache<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
}

function createCache<K, V>(): Cache<K, V> {
  const cache = new Map<K, V>();

  return {
    get(key: K): V | undefined {
      return cache.get(key);
    },
    set(key: K, value: V): void {
      cache.set(key, value);
    }
  };
}

export function memo<T,R>(fn:FunctionType<T,R>) {
   const cache:Cache<T,R> = createCache<T,R>();
   return function(arg:T) {
      if(!cache.get(arg)) {
         cache.set(arg, fn(arg));
      }
      return cache.get(arg);
   }
}

//  function memo<T,R>(fn:FunctionType<T,R>) {
//    var cache:{T: any,R: any} = {}; // cache is a closure; fn is a closure
//    return function(arg:T){
//       if(!cache[arg]) {
//          cache[arg] = fn(arg);
//       } 
//       return cache[arg];
//    }
//  }
