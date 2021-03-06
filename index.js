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

//Iteraation 6
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    // insert code
    let cleanArr = new Set();
    
    param.forEach( item => {
       cleanArr.add(item);
    })
    cleanArr = Array.from(cleanArr);
    return cleanArr;
  }

const newDuplicates = removeDuplicates(duplicates);

console.log(newDuplicates);

//Iteration 7
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(nombre, arr) {
    // insert code
    const result = arr.filter( item => item==nombre);
    if(result == nombre) {
      let index = arr.indexOf(nombre);
      return [true, index];
    }
    
    return false;
  }

console.log(finderName('Peggy', nameFinder));

//Iteration 8
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(param) {
    // insert code
    let items = new Set();
    param.forEach( (item, index) => {
      let counter = 0;
        param.forEach( subitem => {
            if(item == subitem) {
                counter += 1;
            }
        });
        
       items.add(`${item} se repite ${counter} veces`); 
    });
    items = Array.from(items);
    return items;
  
  }
  
  console.log(repeatCounter(counterWords));