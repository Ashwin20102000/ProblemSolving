public class LinkedList{
    class Node{
        int data;
        Node next;
        Node(int data){
            this.data=data;
            this.next=null;
        }
    }
        public Node head=null,tail=null;
        void addEle(int data){
            Node newNode =  new Node(data);
            if(head==null){
                head=newNode;
                tail=newNode;
            }
            else{
                tail.next=newNode;
                tail=newNode;
            }
        }
        void print(){
            Node temp = head;
            while(temp!=null){
                System.out.println(temp.data);
                temp=temp.next;
            }
        }
        void reverse(){
            Node curr = head;
            Node nexts=null,prev=null;
            while(curr!=null){
                nexts=curr.next;
                curr.next=prev;
                prev=curr;
                curr=nexts;
            }
            head=prev;
        }
     public static void main(String []args){
        LinkedList li = new LinkedList();
        li.addEle(10);
        li.addEle(110);
        li.addEle(130);
        li.reverse();
        li.print();
     }
}
