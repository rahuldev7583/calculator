let calcButtons = document.querySelectorAll('.button');
let showResult = document.getElementById('equal');
let removeItem = document.getElementById("clear").addEventListener('click', remove);
let clearArr = document.getElementById("ac").addEventListener('click', clear);
//Add click event on calcButtons
calcButtons.forEach(calcButton => calcButton.addEventListener('click', collectData));
let newArr = [];
let opeators = ['%', '/', 'x', '+', '-'];
//no repeate opeators as arr2
let arr2 =  ['%', '/', 'x', '+', '-'];
function checkIndex(arr1, arr2){
  let newArr = [];
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        newArr.push(i);
      }
    }
  }
  return newArr;
}
//calculator
function calculate(num1, operator, num2){
  return operator === "+" ? num1 + num2
         : operator === "-" ? num1 - num2 
         : operator === "x" ? num1 * num2 
         : operator === "/" ? num1 / num2 
         : (num1 * num2) /100;
}
//on click calcButton run 
function collectData(event){
 if(newArr.length < 7 && opeators.indexOf(newArr[0] ) === -1){  
  newArr.push(event.target.textContent);
  document.getElementById("display").innerHTML = newArr.join("  ");
  let arr1 = newArr;
  let indexOfOperators = checkIndex(arr1, arr2);
  for(let i = 0; i < indexOfOperators.length; i++){
    if(indexOfOperators.length > 1){
      newArr = [];
       document.getElementById("display").innerHTML = "0";
  } } }
  else{
    console.log("bas kar yarr");
  }
  }
function getNum(arr, begin, end){
  let num = "";
  for(let i = begin; i < end; i++){
    num += arr[i];
  }
  return num;
}
//onclick removeItem run
function remove(){
  if(newArr.length <= 1){
    document.getElementById("display").innerHTML = "0";
    newArr = [];
  } else{
  newArr.splice(newArr.length - 1, 1);
  document.getElementById("display").innerHTML = newArr.join("  ");
}
 console.log(newArr);
}
//onclick clearArr 
function clear(){
  newArr = [];
   document.getElementById("display").innerHTML = "0";
}
showResult.addEventListener('click', run);
let indexOfOperators = [];
//onclick equal button
function run(){
  if(arr2.indexOf(newArr[newArr.length-1]) >= 0){
    console.log("Don't use operators at the end");
    newArr = [];
    document.getElementById("display").innerHTML = "0";
  }
  console.log(newArr);
   let indexOfOperators = checkIndex(newArr, opeators);
  console.log(indexOfOperators);
  console.log(newArr.join(" "));

   let fNum = Number(getNum(newArr, 0, indexOfOperators[0]));
   let finalArr = [fNum];
   for(let j = 0; j < indexOfOperators.length -1; j++){
    finalArr.push(newArr[indexOfOperators[j]], Number(getNum(newArr, indexOfOperators[j]+1, indexOfOperators[j+1])));
   }
   let lNum = Number(getNum(newArr, indexOfOperators[indexOfOperators.length-1]+1, newArr.length));  
   finalArr.push(newArr[indexOfOperators[indexOfOperators.length-1]], lNum);
    console.log(finalArr);
   document.getElementById("display").innerHTML = calculate(finalArr[0], finalArr[1], finalArr[2]);
   newArr = [calculate(finalArr[0], finalArr[1], finalArr[2])];
}
