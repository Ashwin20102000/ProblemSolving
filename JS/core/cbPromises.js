// using Quokka.js so {} returns me a console.log 


// Sync 

// console.log('first')
// console.log('second')
// console.log('third')

// OP
// first
// second
// third


// Async

// console.log('first')
// setTimeout(()=>console.log('second'),0);
// console.log('third')
 
// Op
// first
// third
// second

// Doesn't run rightaway holds return data for future usage


// Callback -> fn passed as arg fn, which triggers once outer fn completes action


// const iWillReturnArg = (args,callback) => {
//   setTimeout(()=>{
//     return (typeof callback==='function')?callback(args):args;
//   },args)
// }

// Wrong Approach
const printer = iWillReturnArg(10);
console.log('printer', printer)
// underfined

// Works Fine
// With Callback

// const comeOnCallback  = iWillReturnArg(10,(message)=>console.log(message));

// 10

// rise of callBack Hell

const comeOnCallback  = iWillReturnArg(40,(message)=>{
  console.log(message)
  let num = 20;
  iWillReturnArg(num,(num)=>{
    console.log(num)
  });
});
// CallBackHell
//40 20
//  eventhought waiting time of 40 is greater than 20 , due to callback we are getting it as


// if its on normal way it would be

iWillReturnArg(89,(act)=>{act})
iWillReturnArg(29,(act)=>{act})
// 29 and 89

// here it runs without callback differently it doesn't wait for anything,
//  when timer tickles it will be triggered


//  Promise -> Async way of achieving things has three state resolve,reject and fullfilled

const promiseRes = new Promise((res,rej)=>{
  let state = true;
    state?res("Resolved"):rej("Rejected")

});

promiseRes.then(d=>{console.log(d)}).catch(e=>{console.log(e);})
// Resolved



const promiseRej = new Promise((res,rej)=>{
  let state = !true;
  state?res("Resolved"):rej("Rejected")
});

promiseRej.then(res=>{console.log(res)}).catch(err=>{console.log(err)});

// Promise over callbacks

const promise1 = new Promise((res,rej)=>!1?res("Res"):rej("Rej"));
// const promise2 = new Promise((res,rej)=>!0?res("Res1"):rej("Rej1"));
const promise3 = new Promise((res,rej)=>!1?res("Res2"):rej("Rej2"));

// Promise comparators

// Promise.all([promise1,promise2,promise3]).then(res=>{res})
// ['Res','Res1','Res2]


// return array of res and if one gets failed all will be collapsed
const promise2 = new Promise((res,rej)=>!1?res("Res1"):rej("Rej1"));

Promise.all([promise1,promise2,promise3]).then(res=>{res}).catch(er=>{er})
// error occured on Rej1

Promise.race([promise1,promise2,promise3]).then(res=>{res});
// promise1 will be executed and solved


Promise.race([promise1,promise2,promise3]).then(res=>{res});
// const promise2 = new Promise((res,rej)=>!1?res("Res1"):rej("Rej1"));
// promise1 will be executed and solved, because Eventhought promise 2 fails, race checks
// promise 1 and it returned res



Promise.race([promise2,promise1,promise3]).then(r=>{r}).catch(er=>{er})
// Rej1 due to here promise 2 rejected first.

Promise.allSettled([promise1,promise2,promise3])
.then(res=>{res.map(r=>{r})})
// returns [{status,value}] regardless of rejected


Promise.any([promise1,promise2,promise3])
.then(res=>{res}).catch(e=>{e});
// checks for any of the res in itr
// If All rejected throws [AggregateError: All promises were rejected]



// Async Await

const hold2sec = () => new Promise(res=>setTimeout(()=>res(7*7),100))
const asyncAwait = async() => {
  const twoSecData = await hold2sec();
  console.log({twoSecData});
  console.log('first');
}
asyncAwait();

// 49
// first


let quickPromise = Promise.resolve();
// when we use resolve it will be always fullfilled 
quickPromise.then(() => {console.log("promise finished")});

console.log("program finished"); 

//  promise finished
// program finished


function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  //  In case of loop is sync with out async await then it leads to Syntax Error
  console.log("Process completed!");
}
process([1, 2, 3, 5]);

// Process completed
// 1 2 3 5

async function func() {
  await 10; // return await 10;
}
console.log(func());

// await has not effect here and there is missing in return type


const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

//  20
// NAN

// perimeter is NaN due to Arrow Fn. this has no use there


console.log("Start");
const promiseMe = new Promise((res)=>{
  console.log(1);
  res(2);
})
promiseMe.then(r=>{r})
console.log('End')

//Start
// 1
// End
// 2

//  so basically js engine take more priority to the sync code whereas async should move to
// the sub task queue for the execution it holds some time there


console.log("Start");
const promiseMe1 = new Promise((res)=>{
  console.log(1);
  res(2);
  console.log(3)
})
promiseMe1.then(r=>{r})
console.log('End')

// Start
// 1
// 3
// End
// 2

//  here 3 is sync code inside the scope

console.log("Start");

const promiseFn =  () => new Promise(res=>{
  console.log(1) 
   res("Success")
  });
console.log('Middle');
promiseFn().then(res=>{res});
console.log('End');

// Start
// Middle
// 1
// End
// Succes

// promiseFn is fn it needs invocation so middle will be printed above



// Promise Chaining
const rejectedPromise  =  Promise.reject("Reject");
rejectedPromise.then(res=>{res}).then(res=>{res}).catch(er=>{er}).then(_=>{
  console.log("Success4");
});

// Reject
// Success 4
// Here The then after rej will always executes



const promise  = (state) => new Promise((res,rej)=>state?res("Res"):rej("Rej"));
promise(true).then(res=>{
  {res};
  return promise(false);
}).catch(err=>{
  {err};
  return "Error Occured";
}).then(res=>{res}).catch(er=>{er});

// Res
// Rej
// Error Occured

// first then return promise that simply rejects and next string return catch after
// then always executed and there is rej so catch never works here


const firstPromise = Promise.resolve("First");
const secondPromise = Promise.resolve(firstPromise);
secondPromise.then(res=>res).then(r=>{r});

//  First


// Convert Promise Chaining into Async/Await

const loadData = (url) => {
  return fetch(url).then(res=>(res.status===200)?res:new Error(res.status));
}
loadData("https://reqres.in/api/users").catch(er=>{er})

// to Async Await

const loadAsyncData = async(url) => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    if(res.status===200){
      return json;
    }
    throw new Error(res.status);
  } catch (error) {
    return error.message;
  }
}
loadAsyncData("https://reqres.in/api/users").catch(er=>{er})

