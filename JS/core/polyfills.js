// using Quokka js so {} return me the console.log

// Array Polyfills

const Arr = [1,2,3,4,5]

// Filter -  

const filterEven =  Arr.filter(a=>a%2===0);

{filterEven} // [2,4]

Array.prototype.filter = null;


if(!Array.prototype.filter){
  const newArr = [];
  Array.prototype.filter = function(callBack){
  for(let i=0;i<this.length;i++){
    callBack(this[i],i,this) && newArr.push(this[i]);
  }
  return newArr;
  }
  const filterPolyfill = Arr.filter(a=>a%2==0);
  {filterPolyfill} 
  //  [2,4]
}


// Map -

const ArrMap = Arr.map(a=>a*a);
{ArrMap}
// [1,4,9,16,25]

Array.prototype.map = null;

if(!Array.prototype.map){
  Array.prototype.map = function (callback) {
    const newArr = [];
    for(let i=0;i<this.length;i++){
      newArr.push(callback(this[i],i,this));
    }
    return newArr;
  }
  const MapPolyfil = Arr.map(a=>a*a);
  {MapPolyfil}
  // [1,4,9,16,25]

}

// Reduce - 


const ArrReduce = Arr.reduce((a,b)=>a+b,0);
{ArrReduce}
// 15
Array.prototype.reduce = null;

Array.prototype.reduce = function(cb,init){
  let reducer = init;
  for(let i=0;i<this.length;i++){
    reducer =  init ? cb(reducer,this[i],i,this) : this[i];
  }
  return reducer;
}

const ReducePolyfil = Arr.reduce((a,b)=>a+b,0);
{ReducePolyfil}

// 15


// Nullish Coalescing

const a = 27;
// ??
const b = a??29;
// before nullish coalescing
const c = a!==undefined&&a!==null?a:29;
{b}
// 27

{c}
// 27


// Async Promise Polyfill Basic

function AsyncPromisePolyfill(exe){
  let onRes,onRej;
  function resolve(v){
    onRes(v);
  }
  function reject(v){
    onRej(v);
  }
  this.then = function(cb) {
    onRes = cb;
    return this;
  }
  this.catch = function(cb) {
    onRej = cb;
    return this;
  }
  exe(resolve,reject)
}


const promise1 = new AsyncPromisePolyfill((res,rej)=>{
  setTimeout(()=>{
    res(2312);
  },1e3);
});

promise1.then(res=>{res}).catch(err=>{err});

// 2312



// Sync && Async Promise Polyfill

function PromisePolyfill(exe){
  let onRes,onRej,isFullfilled=false,isCalled=false,isRejected=false,value;
  function resolve(v){
    isFullfilled = true;
    value=v;
    if(typeof onRes==='function'){
      onRes(v);
      isCalled=true;
    }
  }
  function reject(v){
    isRejected=true;
    value=v;
    if(typeof onRej==="function"){
      isCalled=true;
      onRej(v);
    }
  }
  this.then = function(cb) {
    onRes = cb;
    if(isFullfilled && !isCalled){
      isCalled = true;
      onRes(value);
    }
    return this;
  }
  this.catch = function(cb) {
    onRej = cb;
    if(isRejected && !isCalled){
      isCalled=true;
      onRej(value);
    }
    return this;
  }
  try {
    exe(resolve,reject)
  } catch (error) {
    reject(error);
  }
}


const promise = new PromisePolyfill((res,rej)=>{
    rej(2312);
});

promise.then(res=>{res}).catch(err=>{err});

// 2312
