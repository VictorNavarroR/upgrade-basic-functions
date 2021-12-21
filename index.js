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
  if(!Array.isArray(param)) {
    return 'Esta funcion solo recibe arrays como argumentos';
  }
  let finalValue = 0;
  param.forEach( number => {
    finalValue +=  number;
  });

  return finalValue;
}

console.log(sumAll(numbers))

//Iteration 4
const numberss = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    // insert code
    if(!Array.isArray(param)) {
        return 'Esta funcion solo recibe arrays como argumentos';
    }
    const itemsCount = param.length;
    const total = sumAll(param);
    const promedio = total / itemsCount;

    return promedio;

}
console.log(average(numberss));

//Iteraation 5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // insert code
  let arrayNumbers = [];

  param.forEach( item => {
      if(typeof item == "string") {
        arrayNumbers.push(item.length);
      } else {
        arrayNumbers.push(item);
      }
      
  });
  return average(arrayNumbers);
}

console.log(averageWord(mixedElements));