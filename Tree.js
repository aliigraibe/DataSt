const prompt = require('prompt-sync')({sigint: true});
class TreeNode {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
    traverse = () => {
        let nodes = [this];
        while (nodes.length > 0) {
        let currentNode = nodes.pop();
        console.log(currentNode.name); 
        nodes = [...nodes, ...currentNode.children];
        }
      }
      addChild = (child) => {
        if (this.children.length < 2) 
        {      
        this.children.push(child);  
        console.log(`child ${child.name}`)    
       
      }       
           else  console.log('trees full');
        
      }

      parentSearch = (child) => {
        let nodes = [this];
        while (nodes.length > 0) {
          let currentNode = nodes.pop();
          if(child.name.split(" ")[1] === currentNode.name.split(" ")[0])
          {
            return currentNode;
          }
           nodes = [...nodes, ...currentNode.children];   
        }
            return "parent not exist";
          }



}


let childName= prompt('enter child name  (done if finished) ');
const root = new TreeNode("family");
while(childName !=="done")
{
const child = new TreeNode(childName)
parent = root.parentSearch(child)
if(parent !== "parent not exist")
{
parent.addChild(child)
}
else console.log(parent)
childName= prompt('enter child name  (done if finished) ');
}
root.traverse()