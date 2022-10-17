// Accidental Global Variable
function fun() {
  let a = b = 0;
  a++;
  return a;
}
fun();

//  This fun will make this to global variable due to accidental provoke
// function fun() {
//   let a;
//   window.b = 0;
//   a = window.b;
//   a++;
//   return a;
// }


console.log(typeof b,typeof a);
 //number undefined


// Array unappropirate behaviour
let arr = [1,2,,4];
console.log( arr.length)
  // 4  due to [1,2,empty|null,4]
arr.length = 0;
console.log('arr', arr) 
 // [] empty array due to assignment operation in previous line all data will be deleted

// Floating Point Math
console.log(.1+.2===.3)  
//false Due to rounding errors occured on addition operation

// shallow copy =>  reference of variable will be getting update due to shallow process of the existing  variable

// Objects
let shallowA = {
  name:"Ashwin J",
  age: 21,
}

let shallowB = shallowA;
shallowB.age = 22 
//update existing b , now its affect a variable

console.log(shallowA)
// { name : 'Ashwin J', age: 22}  this behaviour happens due to this ( shallowB = shallowA) expression



// deep copy =>  reference of variable will not be referenced, it will be created new data to avoid updation

let deepA = {
  name:"Ashwin J",
  age: 21,
}

let deepB = {...shallowA};
// let deepB = JSON.parse(JSON.stringify(deepA))
deepB.age = 22 //update existing b , now its affect a variable

console.log(deepA)
// { name : 'Ashwin J', age: 21}  this is saves from the non-referencing variable. data created by spread and Json methods for obj


// Arrays Shallow Example

let shallowAArr = Array(4).fill('🥕');
let shallowBArr = shallowAArr;
shallowBArr.push("🥠")
// here later changes on the B also affect A is shallow in ARRAY
console.log(shallowAArr)
// ['🥕', '🥕', '🥕', '🥕', '🥠']


// Arrays Deep copy 

let deepAArr = Array(4).fill('🥕');
let deepBArr = deepAArr.slice();
deepBArr.push("🥠")
// Now by using slice method we are getting new data which doesn't have any reference
console.log(deepAArr)
// ['🥕', '🥕', '🥕', '🥕']


// Variables

// Hoisting
// let , const , var
// var is hoisted
// let and const  is hoisted but on temproral dead zone
//var behaviour
console.log(nam) 
//moves undefined due to var is hoisted moves up and makes it as var name= "undefined"
var nam = "Ash"


// let  behaviour
// console.log(name)
 //moves to temproral dead zone eventhough hoisted
// let name = "Ash"

// illegal shaowing => var can take let but let cannot take on var
var scope = "Ashwin";
if(scope){
  let scope="Ash"
  console.log('scope', scope);
   //Ash due to internal scope

}
console.log(scope)  //Ashwin

// IIFE - immediately invoked function expression , no need for call trigers when it mets the interpreter



// Scope with IIFE

for(var i=0;i<4;i++){
  setTimeout(()=>console.log(i),i); 
  // 4 4 4 4 this is due to var key word just takes window.i=4 at end of the loop
}
// we can fix that by using IIFE with var
for(var i=0;i<4;i++){
  
  (function(a){
    setTimeout(()=>console.log(a),a); 
    // 0 1 2 3 by using IIFE and passing i to arg will works 
  }
  )(i);
   // feed function with iterator it can take it as props
} 

for(let i=0;i<4;i++){    
  setTimeout(()=>console.log(i),i); // 0 1 2 3 by using let in intialization helps
}


// JS Engine based Question

function main() {
 
  console.log("A");  
  // A prints 1st
 
  setTimeout(function print() {
    console.log("B");  
    // B prints 3 because of timeout delay which makes and moves this to callback queue
  }, 0);
  
  console.log("C");  
  //prints C 2nd
}
main();

console.log(1 < 2 < 3);
 // true 1<2 is true and now true(1) < 3  
console.log(3 > 2 > 1); 
// false 3>2 is true and now true(1) > 1 


// rest operator used in parameter to derive values forms into one []
function restChexk(a,b,...c){
  console.log(c)
  // [4,5,6]
}
// function restChexk(a,b,...c,d){
//   console.log(c)
   //SyntaxError: Comma is not permitted after the rest element
// }
restChexk(1,2,4,5,6)


// combine the string to one
const parseAndSum = (a) => [...a.split("")].reduce((a,b)=>a+b)+"";

const combineToOne = s => {
    if(s==="")return null;
    return (s.length===1)? +s : combineToOne(parseAndSum(s));
}

combineToOne("55557");
// return 9
