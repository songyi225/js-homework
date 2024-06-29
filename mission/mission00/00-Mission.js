/* -------------------------------------------------------------------------- */
/*                              getValueAtObject                              */
/* -------------------------------------------------------------------------- */

/* function getValueAtObject(obj, key) {
  let value;

  if (obj.hasOwnProperty(key) === true) {
    value = obj[key];
  } else {
    return '해당 key는 존재하지 않습니다.'
  }

  return value;
} */

// 타입을 정확히 체크해줌
function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "object"
  );
}

function getValueAtObject(obj, key) {
  if (typeof key !== "string") {
    throw new TypeError(
      "getValueAtObject의 두번째 인수는 문자 타입이어야 합니다."
    );
  }

  if (isObject(obj)) {
    // obj가 객체가 맞다면 아래 조건도 확인
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return obj[key];
    } else {
      throw new Error(`getValueAtObject에 해당 ${key}가 존재하지 않습니다.`);
    }
  } else {
    throw new Error("getValueAtObject의 첫번째 인수는 객체 타입이어야 합니다.");
  }
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

/* function getNumberAtArray(arr, index) {
  let value;

  if (!Array.isArray(arr)) {
    return "배열이 아닙니다.";
  }
  if (index > arr.length - 1 || index < 0) {
    return "유효한 인덱스가 아닙니다.";
  }

  value = arr[index];
  return value;
} */

function getNumberAtArray(arr, index) {
  if (Array.isArray(arr)) {
    if (index >= 0 && index < arr.length) {
      return arr[index];
    } else {
      throw new Error("배열에 없는 index입니다.");
    }
  } else {
    throw new Error("getNumberAtArray 첫번째 인수는 배열 타입이어야 합니다.");
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(person, 2)); // 배열이 아닙니다
console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
