const numbers = [[1, 2, 3, 4],[3, 6, [5, 6], 8, 2,[2, 4], 9],[4, 2, [6, 7, [2, 6, 1]]]];

const req = (nums) => {
 let total = 0 ; 
 nums.map((num)=>{

  if(!isNaN(num))total+=num;
else total+=req(num)

 });

 return total;
}

console.log(req(numbers));