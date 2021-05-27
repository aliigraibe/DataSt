class Node {
  constructor(color,number, nextNode) {
    this.color = color;

    this.number = number;
    this.nextNode = nextNode;
    
  }
}
class Stack {
    constructor(limit) {
      this.limit = limit;
      this.size = 0;
      this.topNode = null;
    }
    
  push = (color,number) => {
    if (this.isFull) {
      console.log(`Your stack is full, you can't add ${color,number}`);
    } else {
      const newNode = new Node(color,number);
      newNode.nextNode = this.topNode;
      this.topNode = newNode;
      this.size++;
    }
  };

  pop = () => {
    if (this.isEmpty) {
      return "Your stack is empty";
    } else {
      const popped = this.topNode;
      this.topNode = popped.nextNode;
      this.size--;
      return popped.color , popped.number;
    }
  };

  get isFull() {
    return this.size === this.limit;
  }

  get isEmpty() {
    return this.size === 0;
  }

  get peek() {
    if (this.isEmpty) console.log("Your Deck is empty. Add Deck!");
    else return this.topNode.color,this.number;
  };

displayData = ()=>
    {
let currnetNode = this.topNode
while(currnetNode){
   
    console.log(` - Number :${currnetNode.number} color : ${currnetNode.color}`)
currnetNode=currnetNode.nextNode}

    };
}
const num= [1,2,3,4,5,6,7,8,9]
const co=  [  'red','black','white','blue'] 

const random=(array)=>{ const crd = Math.floor(Math.random()* array.length);

    return array[crd];
}
const Cards = new Stack(20);
const cardsArray = [];

while(!Cards.isFull){
const number = random(num)
const color= random(co)
if(!cardsArray.includes(`${color} ,${number}`))
{
Cards.push(color,number);
cardsArray.push([color,number])}

}
console.log(` ${Cards.displayData()}`);


let player1=[]
let player2=[]



let i =0;
while(i<=5)
{

player1.push(cardsArray.pop())
player2.push(cardsArray.pop())
i++


}


console.log(`player One ${player1}`)
console.log(`player Tow ${player2}`)
