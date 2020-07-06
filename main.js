const capitalizeSentences = function (sentence) {
  let result = "";
  let lowerSentence = sentence.toLowerCase();
  for (let i = 0; i < lowerSentence.length; i++) {
    if (i === 0 || lowerSentence[i - 2] === ".") {
      result += lowerSentence[i].toUpperCase();
    } else {
      result += lowerSentence[i];
    }
  }

  return result;
};

//2

const isValidPassword = function (password) {
  let result = true;
  if (password.length < 12) {
    result = false;
  } else {
    for (let i = 0; i < password.length; i++) {
      if (password[i] === " ") {
        result = false;
      }
    }
  }

  return result;
};

//3
const makeHalfSquares = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let squareNHalf = Math.pow(arr[i], 2) / 2;
    newArr.push(squareNHalf);
  }

  return newArr;
};

//4
const countAs = function (arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 90) {
      counter++;
    }
  }

  return counter;
};

//5
const deleteMiddleLetters = function (strings) {
  let result = "";
  if (strings.length % 2 !== 0) {
    let middle = strings.length / 2;
    let front = strings.slice(0, middle);

    let last = strings.slice(middle + 1, strings.length);

    result = front + last;
  }

  if (strings.length % 2 === 0) {
    let middle = strings.length / 2;
    let front = strings.slice(0, middle - 1);

    let last = strings.slice(middle + 1, strings.length);

    result = front + last;
  }

  return result;
};

//6
const lastIndexOfSpace = function (str) {
  let counter = 0;

  if (str.indexOf(" ")) {
    counter = -1;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      counter = i;
    }
  }
  return counter;
};
//last
const hyphenateName = function (fullName) {
  let result = "";
  let counter = 0;
  //finding the position of that last space..counter
  for (let i = 0; i < fullName.length; i++) {
    if (fullName[i] === " ") {
      counter = i;
    }
  }
  
  //putting that value instead of space
  for (let i = 0; i < fullName.length; i++) {
    if (i === counter) {
      result += "-";
    } else {
      result += fullName[i];
    }
  }

  return result;
};



//don't go below this

if (typeof capitalizeSentences === "undefined") {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === "undefined") {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === "undefined") {
  makeHalfSquares = undefined;
}

if (typeof countAs === "undefined") {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === "undefined") {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === "undefined") {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === "undefined") {
  hyphenateName = undefined;
}

module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
};
