export const decodeCaesar = (
  characterSet: string[],
  inputString: string,
  key: number
) => {
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

export const decodePolybius = (square: string, inputString: string) => {
  let output = "";
  let input = inputString.split(" ");

  for (let i = 0; i < input.length; i++) {
    output +=
      square[Number(input[i].substring(0, 1))][
        Number(input[i].substring(1, 2))
      ];
  }

  return output;
};

export const decodeHomphonic = (map: any, inputString: string) => {
  let output = "";
  let reverseMap: any = {};

  for (let key in map) {
    map[key].forEach((r: string) => {
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

export const decodeTrithemius = (key: string, inputString: string, characterSet: string[]) => {
  let output = "";

  let index = characterSet.join("").indexOf(key) + 1;
  for (let i = 0; i < inputString.length; i++) {
    output += decodeCaesar(characterSet, inputString[i], index);
    index++;
  }

  return output;
};

export const decodeVigenere = (characterSet: string[], inputString: string, key: string) => {
  let output = ''
  const keyList = Array.from(key)
  let counter = 0
  for (let i = 0; i < inputString.length; i++) {
    let character = inputString[i]
    let shift = characterSet.join("").indexOf(keyList[counter]) + 1

    output += decodeCaesar(characterSet, character, shift)
    counter = counter === keyList.length - 1 ? 0 : counter + 1
  }

  return output
}
