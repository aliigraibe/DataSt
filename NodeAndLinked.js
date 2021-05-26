const prompt = require('prompt-sync')({sigint: true});

class Node {
    constructor(age, highlight,nextNode = null) {
      this.age = age;
      this.highlight=highlight;
      this.nextNode = nextNode; // our link
    }}
    
    
    class LinkedList {
        constructor(age, highlight) {
          this.headNode = new Node(age, highlight);
        }
      
        addBeginning = (age,highlight) => {
          const node = new Node(age,highlight,this.head);
          this.head = node;
        };
        get ls() {
          
            let current = this.head;
            while (current) {
                console.log(`Your Age is: ${current.age} Your HighLight: ${current.highlight}`);
              current = current.nextNode;

            };
          }
           
      insertHighLight=(age)=>{  
        let current=this.head
        while(current.age<age)

        {
          let currentAge =current.age+1
          if (current.nextNode&&current.nextNode.age===currentAge){

            current=current.nextNode
          
          }
            else {
              
              let highlight= prompt(`enter highlight this year:${currentAge}`)
            let newNode=new Node(currentAge,highlight,current.nextNode)
            current.nextNode=newNode;
            current=newNode;
            }
          }
        }

        
      }
    
  const myList = new LinkedList(7,"i I turned seven");
  myList.addBeginning(7," I turned seven");

  myList.addBeginning(3,"i started walking");
  myList.addBeginning(1,"i was born");
  let age = prompt('enter age for highlight ${age}')
  myList.insertHighLight(age);
  console.log(myList)
myList.ls;
  const NodeSeven = new Node(7,' I was born in' );
  const NodeThree = new Node(3,' I was born in'  , NodeSeven);
  const nodeOne = new Node(1,' I was born in'  ,NodeThree );


