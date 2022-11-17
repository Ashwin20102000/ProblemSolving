//  using quokka.js so {} returns me a console.log()


// Problem is to build search builder fn. It works like filter based upon price speed and price range

function searchFilter(n,priceSpeed,q,priceRange) { 
  let filter =[];
  for(let i=0;i<q;i++){
    for(let j=0;j<n;j++){
      if(priceRange[i][0]<=priceSpeed[j][0] && priceRange[i][1]>=priceSpeed[j][0]){
        filter.push(priceSpeed[j]);
      }
    }
  }
  const minPrice = filter.sort((a,b)=>a[0]-b[0]);
  let ans = minPrice.splice();
  for(let i=0;i<minPrice.length-1;i++){
    if(minPrice[i][0]===minPrice[i+1][0] && minPrice[i][1]>minPrice[i+1][1]){
     [ans[i],ans[i+1]]=[minPrice[i+1],minPrice[i]];
    //  i++;
    }
  }
  const set  = [... new Set([...ans,...minPrice])];
  {set}
  
  // [[23,15],[23,100],[25,65]]
  return set;
 }

 searchFilter(4,[[23,100],[25,65],[23,15],[8,6]],1,[[10,50]])


// Create JSON Parsing and log output


function jsonParsing(text,q,queries){
  const parse = JSON.parse('{'+ text.split("").slice(0).join("")+'}');
  const ans= [];
  for(let i=0;i<q;i++){
    const [key,value] =  queries[i].split(" ");
    ans.push(parse[key][value])
  }
  const returnVal = ans.join(" ");
  {returnVal};
//   John 15 10
}

// jsonParsing(`"Student":{"Name":"John","Age":"15","Class":"10"}`,3,
// ["Student Name","Student Age","Student Class"]);

//  How to make generator function 

let range = {
  from:1,
  to:5
}



// Generator Function alike
range[Symbol.iterator] = function(){
  return {
    current:this.from,
    end:this.to,
    next(){
      if(this.current<=this.end){
        return {done:false,value:this.current++}
      }
      return {done:true};
    }
  }
}
for(const i of range){
  {i}
}

// Filter out the duplicates and unique values in the list.

// sampleInput = [2,4,5,6,2,3,2,3,7,7,9,8]

// sampleOutputDuplicates = [2,3,7]
// sampleOutputUnique = [4,5,6,9,8]


const SampleInput = [2,4,5,6,2,3,2,3,7,7,9,8];

let outputCount = {};

for(let item of SampleInput){
  outputCount[item]=!isNaN(outputCount[item])?++outputCount[item]:1;
}
// {outputCount}
const duplicates = Object.entries(outputCount).filter(([_,val])=>val>1)
const outputDuplicates = Object.values(duplicates).map(d=>d[0]);
{outputDuplicates}

// [2,3,7]

const uniques = Object.entries(outputCount).filter(([_,val])=>val===1)
const outputUniques = Object.values(uniques).map(d=>d[0]);
{outputUniques}

// [4,5,6,8,9]


// Sort the input list considering the sorting sequence ordered list.

let sortingSequnce = {
  "Stack": 1,
  "Queue": 2,
  "LinkedList": 3,
  "CircularLinkedList": 4
}

let sampleInput = [{
  "primaryKeyId": 1,
  "dataStructureType": "LinkedList"
},
{
  "primaryKeyId": 2,
  "dataStructureType": "Stack"
},
{
  "primaryKeyId": 3,
  "dataStructureType": "Queue"
},
{
  "primaryKeyId": 4,
  "dataStructureType": "CircularLinkedList"
},
{
  "primaryKeyId": 5,
  "dataStructureType": "CircularLinkedList"
},
{
  "primaryKeyId": 6,
  "dataStructureType": "Queue"
},
{
  "primaryKeyId": 7,
  "dataStructureType": "LinkedList"
}
];


const sortSequence = Object.entries(sortingSequnce).sort(([k1,v1],[k2,v2])=>v1-v2);
// {sortSequence}
const dsKey = "dataStructureType"
let output = [];
sortSequence.forEach(sequence=>{
  for(let item of sampleInput){
    if(sequence[0]===item[dsKey]){
      output.push(item)
    }
  }
})

{output}

// [ { primaryKeyId: 2, dataStructureType: 'Stack' },
//   { primaryKeyId: 3, dataStructureType: 'Queue' },
//   { primaryKeyId: 6, dataStructureType: 'Queue' },
//   { primaryKeyId: 1, dataStructureType: 'LinkedList' },
//   { primaryKeyId: 7, dataStructureType: 'LinkedList' },
//   { primaryKeyId: 4, dataStructureType: 'CircularLinkedList' },
//   { primaryKeyId: 5, dataStructureType: 'CircularLinkedList' } ]










// let sampleOutput = [
//   {
//     "primaryKeyId": 2,
//     "dataStructureType": "Stack"
//   },
//   {
//     "primaryKeyId": 3,
//     "dataStructureType": "Queue"
//   },
//   {
//     "primaryKeyId": 6,
//     "dataStructureType": "Queue"
//   },
//   {
//     "primaryKeyId": 1,
//     "dataStructureType": "LinkedList"
//   },
//   {
//     "primaryKeyId": 7,
//     "dataStructureType": "LinkedList"
//   },
//   {
//     "primaryKeyId": 4,
//     "dataStructureType": "CircularLinkedList"
//   },
//   {
//     "primaryKeyId": 5,
//     "dataStructureType": "CircularLinke
//   }
// }
