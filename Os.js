const prompt = require('prompt-sync')({sigint: true});

 FibonacciChecker=(num) =>{ 
    if(num===2||num===3){
      return "yes";
    }
     let num1=0;
      let num2=1;
      let num3=1;
    for(let i=0; i<=num; i++){
        if(num1===num){return "yes";}
          num1 = num2; 
          num2 = num3; 
          num3 = num1+num2; 
        }
    return "no";
  
  }  
console.log(FibonacciChecker(parseInt(prompt(`enter number  :`))))