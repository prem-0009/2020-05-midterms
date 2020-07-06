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
  if (password.includes(' ') || password.length < 12){
    return false;

  } else {
    return true;
  }
  
  
  
  // let result = true;
  // if (password.length < 12) {
  //   result = false;
  // } else {
  //   for (let i = 0; i < password.length; i++) {
  //     if (password[i] === " ") {
  //       result = false;
  //     }
  //   }
  // }

  // return result;
}

console.log(isValidPassword('hello'))

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
  return str.lastIndexOf(' ');
  // let counter = 0;

  // if (str.indexOf(" ")) {
  //   counter = -1;
  // }

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === " ") {
  //     counter = i;
  //   }
  // }
  // return counter;
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


//alternate solution

// const capitalizeSentences = function(paragraph) {
//   let result = '';

//   for (let i = 0; i < paragraph.length; i++) {
//     if (paragraph[i - 2] === '.' || i === 0) {
//       result = result + paragraph[i].toUpperCase();
//     } else {
//       result = result + paragraph[i].toLowerCase();
//     }
//   }

//   return result;
// }

// const isValidPassword = function(password) {
//   if (password.length < 12) {
//     return false;
//   }

//   for (let i = 0; i < password.length; i++) {
//     if (password[i] === ' ') {
//       return false;
//     }
//   }

//   return true;
// }

// // returning a raw compound boolean using .includes
// const isValidPasswordAlt = function(password) {
//   return !password.includes(' ') && password.length >= 12;
// }

// const makeHalfSquares = function(nums) {
//   const results = [];
//   for (let i = 0; i < nums.length; i++) {
//     results.push(nums[i] ** 2 / 2);
//   }

//   return results;
// }

// // or, using .map
// // (We'll be covering this soon!)
// const makeHalfSquaresAlt = function(nums) {
//   return nums.map((num) => num ** 2 / 2);
// }

// const countAs = function(grades) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= 90) {
//       count = count + 1;
//     }
//   }

//   return count;
// }

// // string building version with very long boolean
// const deleteMiddleLetters = function(str) {
//   let result = '';
//   const middle = Math.floor(str.length / 2);
//   for (let i = 0; i < str.length; i++) {
//     if (str.length % 2 === 1 && i !== middle || str.length % 2 === 0 && i !== middle && i !== middle - 1) {
//       result = result + str[i];
//     }
//   }

//   return result;
// }

// // else-if string-building version
// // not necessary, but possibly easier to follow than the very long boolean
// const deleteMiddleLettersAlt1 = function(str) {
//   let result = '';
//   const middle = Math.floor(str.length / 2);
//   for (let i = 0; i < str.length; i++) {
//     if (str.length % 2 === 1 && i !== middle) {
//       result = result + str[i];
//     } else if (str.length % 2 === 0 && i !== middle && i !== middle - 1) {
//       result = result + str[i];
//     }
//   }

//   return result;
// }

// // nested-if string-building version
// // probably not... good
// // but another way to logic it!
// const deleteMiddleLettersAlt2 = function(str) {
//   let result = '';
//   const middle = Math.floor(str.length / 2);
//   for (let i = 0; i < str.length; i++) {
//     if (str.length % 2 === 1) {
//       if(i !== middle) {
//         result = result + str[i];
//       }
//     } else if (i !== middle && i !== middle - 1) {
//         result = result + str[i];
//     }
//   }

//   return result;
// }

// // using .slice
// const deleteMiddleLettersAlt3 = function(str) {
//   const middle = Math.floor(str.length / 2);
//   if (str.length % 2 === 1) {
  
//     return str.slice(0, middle) + str.slice(middle + 1);
//   }
  
//   return str.slice(0, middle - 1) + str.slice(middle + 1);
// }

// const lastIndexOfSpace = function(str) {
//   // looping backwards version
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === ' ') {
//       return i;
//     }
//   }

//   // we made it through the whole string without encountering a space and returning the index (which would've ended this function)
//   return -1;
// }

// // looping forwards version, updating index as we go:
// const lastIndexOfSpaceAlt1 = function(str) {
//   // default to -1 in case we don't find one
//   let lastIndex = -1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       lastIndex = i;
//     }
//   }

//   return lastIndex;
// }

// // .lastIndexOf version
// const lastIndexOfSpaceAlt2 = function(str) {
//   return str.lastIndexOf(' ');
// }

// const hyphenateName = function(name) {
//   let result = '';
//   for(let i = 0; i < name.length; i++) {
//     if (i === name.lastIndexOf(' ')) {
//       result = result + '-';
//     } else {
//       result = result + name[i];
//     }
//   }

//   return result;
// }

// // alternate if check using our solution to lastIndexOfSpace:
// const hyphenateNameAlt = function(name) {
//   let result = '';
//   for(let i = 0; i < name.length; i++) {
//     if (i === lastIndexOfSpace(name)) {
//       result = result + '-';
//     } else {
//       result = result + name[i];
//     }
//   }

//   return result;
// }




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
