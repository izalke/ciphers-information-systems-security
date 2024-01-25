export const decodeCaesar = (characterSet, inputString, key) => {
    let output = "";
    let prev = 0;
  
    for (let i = 1; i <= inputString.length; i++) {
      let index = characterSet.join("").indexOf(inputString.substring(prev, i));
      index = Number(index) - Number(key);
      if (index < 0) {
        index += characterSet.length;
      }
      output = output + characterSet[index];
  
      prev++;
    }
  
    return output;
  };
  
  export const decodePolybius = (sqaure, inputString) => {
    let output = "";
    let input = inputString.split(" ");
  
    for (let i = 0; i < input.length; i++) {
      output +=
        sqaure[Number(input[i].substring(0, 1))][
          Number(input[i].substring(1, 2))
        ];
    }
  
    return output;
  };
  
  export const decodeHomphonic = (map, inputString) => {
    let output = "";
    let reverseMap = {};
  
    for (let key in map) {
      map[key].forEach((r) => {
        reverseMap[r] = key;
      });
    }
  
    for (let i = 0; i < inputString.length; i++) {
      let character = inputString[i];
      let decodedChar = reverseMap[character];
  
      if (decodedChar !== undefined) {
        output += decodedChar;
      } else {
        output += character;
      }
    }
  
    return output;
  };
  
  export const decodeTrithemius = (key, inputString, characterSet) => {
    let output = "";
  
    let index = characterSet.join("").indexOf(key) + 1;
    for (let i = 0; i < inputString.length; i++) {
      output += decodeCaesar(characterSet, inputString[i], index);
      index++;
    }
  
    return output;
  };
  
  export const decodeVigenere = (characterSet, inputString, key) => {
    let output = "";
    const keyList = Array.from(key);
    let counter = 0;
    for (let i = 0; i < inputString.length; i++) {
      let character = inputString[i];
      let shift = characterSet.join("").indexOf(keyList[counter]) + 1;
  
      output += decodeCaesar(characterSet, character, shift);
      counter = counter === keyList.length - 1 ? 0 : counter + 1;
    }
  
    return output;
  };
  