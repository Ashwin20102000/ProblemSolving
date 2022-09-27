class Arr {
    constructor(){
        this.arr = [];
        this.length = 0;
    }
    push(data){
        this.arr[this.length++]=data;
        return this.arr;
    }
    pop(){
        const pop = this.arr[--this.length];
        this.arr.length = this.length;
        return pop;
    }
    insertAt(idx=Math.floor(this.length/2),data){
        for(let i=this.length;i>=idx;i--){
            this.arr[i]=this.arr[i-1];
        }
        this.arr[idx] = data;
        this.length++;
        return this.arr;
    }
    deleteAt(idx){
        const pop = this.arr[idx];
        for(let i=idx;i<this.length;i++){
            this.arr[i]=this.arr[i+1];
        }
        this.arr.length = --this.length;
        return pop;
    }
    getElementAt(idx){
        return this.arr[idx];
    }
    show(){
        return this.arr;
    }
    
    
    //  Js Methods 
    toString(){
        return this.arr+"";
    }
    join(exp=","){
        let string = this.arr[0]+exp;
        for(let i=1;i<this.length-1;i++){
            string+=(this.arr[i]+exp);
        }
        string+=this.arr[this.length-1];
        return string;
    }
    
    shift(){
        for(let i=1;i<this.length;i++){
            this.arr[i-1]=this.arr[i];
        }
        this.arr.length = --this.length;
        return this.arr;
    }
    
    unshift(data){
        if(Array.isArray(data)){
            this.arr = [...data,...this.arr];
        }
        else{
            this.arr=[data,...this.arr];
            this.length++;
        }
        return this.arr;
    }
    
    len(){
        return this.length;
    }
    
    concat(data){
        if(Array.isArray(data)){
            this.arr = [...this.arr,...data];
        }
        else{
            this.arr=[...this.arr,data];
        }
        this.length=this.arr.length;
        return this.arr;
    }
}

const arr = new Arr();
arr.push(24);
arr.push(25);
arr.push(26);
arr.push(27);
arr.push(29);
arr.push(39);
arr.pop();
arr.insertAt(2,12)
console.log(arr.show());
arr.deleteAt(3)
console.log(arr.getElementAt(1));
console.log(arr.toString());
console.log(arr.join());
console.log(arr.shift());
console.log(arr.unshift(31));
console.log(arr.len());
console.log(arr.concat(32));
console.log(arr.show());
