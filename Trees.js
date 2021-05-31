const prompt = require('prompt-sync')({sigint: true});
class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }


   traverse = (node) => {
    let nodes = [this];
    while (nodes.length > 0) {
    let currentNode = nodes.pop();
    console.log(currentNode.data); 
    nodes = [...nodes, ...currentNode.children];
    }
  };
      parentSearch = (child) => {
        let nodes = [this];
        while (nodes.length > 2) {
          let currentNode = nodes.pop();
          if(child.name.split(" ")[1]===currentNode.name.split(" ")[0])
          {
            return currentNode;
          }
           nodes = [...nodes, ...currentNode.children];   
        }
            return 'parent  not exist'
          };

          add = (child) => {
            if (this.children.length<2) 
            {      
            this.children.push(child);  
            console.log(`child ${child.name}`)    
           
          }       
               else return console.log('trees full');
            
          }
};


let childName= prompt('enter child name  (done if finished) ');
const newTree = new TreeNode("Family");
while(childName !=="done"){
let child = new TreeNode(childName);
let parent = newTree.parentSearch(child)
if(parent !==  "parent not exist"){

}
else console.log(parent)

childName= prompt('enter child name  (done if finished) ')
newTree.add(child)


}

newTree.traverse();
