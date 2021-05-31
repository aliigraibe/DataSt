

class Node {
    constructor(GroupSize, nextNode = null) {
      this.GroupSize = GroupSize;
      this.nextNode = nextNode;
    }
}
  class Queue {
    constructor(limit = 10,frontNode,backNode,size,waitingTime) {
      this.frontNode = null;
      this.backNode = null;
      this.limit = limit;
      this.size = 0;
      this.waitingTime=0;
    }
  
    isEmpty = () => this.size === 0;
  
    isFull = () => this.size === this.limit;
  
    add = (GroupSize) => {
  
      const newNode = new Node(GroupSize)
      if(this.isEmpty())
      this.front=newNode

      else {
        this.backNode.nextNode=newNode;
      this.backNode=newNode;
      this.size+=1;
      this.waitingTime += GroupSize *0.5;
    }
  }
    
  
    enqueue = (GroupSize) => {
      if (this.isFull()) 
      
      console.log("There's no place for you here");
      else {
        let numberofpeople =GroupSize;
        while(numberofpeople>12)
        {
            this.add(2)
            numberofpeople-=12; 
        }
        this.add(numberofpeople);
              }
            
            };
            
dequeue = () => {
              if (this.isEmpty())
            console.log('no one is waiting')
           
           else if (this.size===1) {
             let removedNode= this.frontNode;
             this.frontNode=null
             this.backNode=null
             this.waitingTime=0
             this.size=0
             return removedNode.GroupSize
                   }
                     else{
   
                       let removedNode= this.frontNode
                       this.frontNode=removedNode.nextNode
                       this.size--
                       this.waitingTime-=removedNode.GroupSize*0.5
                       return  removedNode.GroupSize;
                     }
          };
        }

                const rest = new Queue()
                console.log(rest.waitingTime)

                rest.add(4)
                rest.add(4)
                rest.add(4)
                console.log(rest.waitingTime)
                rest.enqueue(6)
                console.log(rest.waitingTime)
                rest.enqueue(17)
                rest.enqueue(3)
                console.log(rest.waitingTime)
                console.log(rest.dequeue())
                console.log(rest.waitingTime)