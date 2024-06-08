/* -------------------------------------------------------------------------- */
/*                              getValueAtObject                              */
/* -------------------------------------------------------------------------- */

function getValueAtObject(obj, key) {
  let value;

  if (obj.hasOwnProperty(key) === true) {
    value = obj[key];
  } else {
    return '해당 key는 존재하지 않습니다.'
  }

  return value;
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};


console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !


/* -------------------------------------------------------------------------- */
/*                              getNumberAtArray                              */
/* -------------------------------------------------------------------------- */
 

function getNumberAtArray(arr, index) {
  let value;

  if (!Array.isArray(arr)) {
    return '배열이 아닙니다.';
  }
  if (index > arr.length -1 || index < 0){
    return "유효한 인덱스가 아닙니다.";
  } 

  value = arr[index];
  return value;
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(person, 2)); // 배열이 아닙니다
console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!