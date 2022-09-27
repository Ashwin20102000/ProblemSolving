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
        
        for(let i=idx;i<this.length;i++){
            this.arr[i]=this.arr[i+1];
        }
        this.arr.length = --this.length;
        return this.arr;
    }
    getElementAt(idx){
        return this.arr[idx];
    }
    show(){
        return this.arr;
    }
}

const arr = new Arr();
arr.push(24);
arr.push(25);
arr.push(26);
arr.push(27);
arr.push(29);
arr.pop();
arr.insertAt(2,12)
console.log(arr.show());
arr.deleteAt(3)
console.log(arr.getElementAt(1));
