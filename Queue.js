class Node {
  constructor(groupSize, nextNode = null) {
    this.groupSize = groupSize;
    this.nextNode = nextNode;
  }
}
class Queue {
  constructor(limit = 10) {
    this.frontNode = null;
    this.backNode = null;
    this.limit = limit;
    this.size = 0;
    this.waitingTime = 0;
  }

  isEmpty = () => this.size === 0;

  isFull = () => this.size === this.limit;
  peek = () => {
    if (this.isEmpty()) console.log("Empty queue!");
    else return this.frontNode.groupSize;
  };



enqueue = (groupSize) => {
  if (this.isFull()) console.log("There's no place for you here");
  else {
    const newNode = new Node(groupSize);
    if (this.isEmpty()) {
      this.frontNode = newNode;
      this.backNode = newNode;
      this.waitingTime += groupSize * 0.5;
    } else {
      this.backNode.nextNode = newNode;
      this.backNode = newNode;
      this.waitingTime += groupSize * 0.5;
    }
    this.size++;
  }
};
dequeue = () => {
  if (this.isEmpty()) console.log("no one is waiting");
  else {
    let removedNode = this.frontNode;
    if (this.size === 1) {
      this.frontNode = null;
      this.backNode = null;
      this.waitingTime = 0;
    } else {
      this.frontNode = removedNode.nextNode;
      this.waitingTime -= removedNode.groupSize * 0.5;
    }
    this.size--;

    return removedNode.groupSize;
  }}
};

const rest = new Queue();
console.log(rest.waitingTime);

rest.enqueue(4);
rest.enqueue(4);
rest.enqueue(4);
console.log(rest.waitingTime);
rest.enqueue(6);
console.log(rest.waitingTime);
rest.enqueue(17);
rest.enqueue(3);
console.log(rest.dequeue());

console.log(rest.waitingTime);

