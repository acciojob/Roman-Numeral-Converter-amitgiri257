const input=document.getElementById("num");
function convertToRoman(num) {
  	const obj = [
      ['M',1000], 
      ['D', 500], 
      ['C', 100], 
      ['L', 50], 
      ['X', 10], 
      ['V', 5], 
      ['I', 1]
    ]

  //your code here
  
  let romanNumeral = "";

  for (let i = 0; i < obj.length; i++) {
    while (num >= obj[i][1]) {
      romanNumeral += obj[i][0];
      num -= obj[i][1];
    }
  }

  return romanNumeral;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
// let to=document.getElementById("to").addEventListener("click",convertToRoman(input));
console.log(btn)
// let output=document.getElementById("roman").appendchild;



// do not edit below this line
// module.exports = convertToRoman
const inputz=document.getElementById("btn");
inputz.addEventListener("click",function(){
    const gotInput=input.value
     console.log(gotInput)
     const output1 = convertToRoman(gotInput); // Output will be "XIV"

console.log(output1);
let container=document.getElementsByClassName("container");

let roman=document.getElementById("roman")
roman.innerText=output1

})



// do not edit below this line
module.exports = convertToRoman
