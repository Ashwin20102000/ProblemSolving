class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList  {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.size++;
        }
        else{
            let temp = this.head;
            while(temp.next){
                temp=temp.next;
            }
            temp.next = newNode;
            this.size++;
        }
    }
    
    search(x){
        let temp = this.head,isVisited = false;
        while(temp && !isVisited){
            if(temp.data === x){
                isVisited=true;
            }
            temp=temp.next;
        }
        return isVisited?"Found":"Not Found";
    }
    
    prepend(data){
        let temp = this.head;
        this.head = new Node(data);
        this.head.next = temp;
        this.size++;
    }
    
    pop(size=this.size){
        let temp = this.head;
        if(size===0){
            this.head=this.head.next
            return temp;
        }
        while(--size-1){
            temp=temp.next;
        }
        temp.next=temp.next.next;
        return temp;
    }
    
    insertAtPos(data,pos=Math.round(this.size/2)){
        if(pos===0){
            this.prepend(data);
        }
        else if(this.size === pos){
            this.append(data);
        }
        else {
            let temp = this.head;
            while(--pos){
                temp=temp.next;
            }
            let newNode = new Node(data);
            let connect = temp.next;
            temp.next = newNode;
            newNode.next = connect;
            this.size++;
        }
    }
    
    show(){
        let temp = this.head;
        let arr = []
        while(temp){
            arr.push(temp.data)
            temp = temp.next
        }
        return arr.join("->")
    }
    len(){
        return this.size;
    }
}

const ll = new LinkedList();
ll.append(22);
ll.append(24);
ll.append(23);
ll.append(25);
ll.prepend(20);
console.log(ll.len());
console.log(ll.show());
// ll.pop();
console.log(ll.search(22));
ll.insertAtPos(32);
console.log(ll.show());





// 0/n
//   1/a 2/b 3/n
   
   
