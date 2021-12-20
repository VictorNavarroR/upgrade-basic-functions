//Iteraction 1
function sum(numberOne , numberTwo) {
    // insert code
    const greaterNumner = numberOne > numberTwo ? numberOne : numberTwo;
    return greaterNumner;
}

//Iteration 2
const avengers = ['Hulk', 'Thor', 'IronMan','Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
    if(!Array.isArray(param)) {
      return 'Esta funcion solo recibe arrays como argumentos';
  }
    let heroLargo = 0;
    let finalValue = '';
  
    for(i = 0; i < param.length; i++) {
          if (heroLargo < param[i].length) {
            heroLargo = param[i].length;
            finalValue = param[i];
        }
    }
  
    return finalValue;
}


//Iteration 3
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
  let finalValue = 0;
  param.forEach( number => {
    finalValue +=  number;
  });

  return finalValue;
}

console.log(sumAll(numbers))