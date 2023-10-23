// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

// 1. 'ageToAbilities'
const ageToAbilities = (age) => {
    if (age < 16) {
        return "You can't drive.";
      } else if (age >= 16 && age <= 17) {
        return "You can drive but not vote.";
      } else if (age >= 18 && age <= 24) {
        return "You can vote but not rent a car.";
      } else {
        return "You can do pretty much anything.";
}
}



// 2. 'oddIndices'
const oddIndices = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }



  // 3. 'numOddValues'
  const numOddValues = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        count++;
      }
    }
    return count;
  }



  // 4. 'averageStringLength'
  function averageStringLength(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].length;
    }
    return sum / arr.length;
  }




// 5. 'firstPunctuationIndex'
const firstPunctuationIndex = (str) => {
    let punctuation = ['.', '?', '!'];
    let punctuationIndex = [];
    for (let i = 0; i < str.length; i++) {
      if (punctuation.includes(str[i])) {
        punctuationIndex.push(i);
      }
    }
    if (punctuationIndex.length === 0) {
      return -1;
    } else {
      return punctuationIndex[0];
    }
    }



    // 6. 'getPlace'
    function getPlace(highScores, score) {
        for (let i = 0; i < highScores.length; i++) {
          if (score > highScores[i]) {
            switch (i + 1) {
              case 1:
                return '1st place'
              case 2:
                return '2nd place'
              case 3:
                return '3rd place'
              default:
                return `${i + 1}th place`
            }
          }
        }
        return `${highScores.length + 1}th place`
      }



      // 7. 'addToObj'
      const addToObj = (obj, key, value) => {
        if (typeof key !== 'string') {
          return 'Function must be called with a valid key.';
        }
        obj[key] = value;
        return obj
      }



      // 8. Stretch Problem 'duplicateElements'
      function duplicateElements(arr) {
        const countMap = {};
        const result = [];
        for (let i = 0; i < arr.length; i++) {
          const num = arr[i];
          if (countMap[num] === 1) {
            result.push(num);
          }
          countMap[num] = (countMap[num] || 0) + 1;
        }
        return result;
      }

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
