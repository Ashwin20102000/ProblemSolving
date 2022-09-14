const MemoizeFuntion = (cbFn,context) => {
  const res = {};
  return function(...args){
    var argCache = JSON.stringify(args);
    if(!res[argCache]){
      console.log('res', argCache)
      res[argCache] = cbFn.call(context||this,...args);
    }
    return res[argCache];
  }
}

const computationalFunction = (a,b) => {
  for(let i=0;i<1e8;i++){
    let temp;
    temp=i;
  }
  return a*b;
}

const MemoizeComputatedFunction = MemoizeFuntion(computationalFunction);

console.time('first');
console.log(MemoizeComputatedFunction(224,122));
console.timeEnd('first')

console.time('second');
console.log(MemoizeComputatedFunction(224,122));
console.timeEnd('second')
