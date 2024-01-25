import { clearInput, searchForRune2D } from "./utilities"

export const codeCaesar = (characterSet: string[], inputString:string, key: number) => {
  let output = ""
  let prev = 0
  inputString = clearInput(inputString)

  for (let i = 1; i <= inputString.length; i++) {
      let index = characterSet.join("").indexOf(inputString.substring(prev, i))
    index = Number(index) + Number(key)
    if (index > characterSet.length) {
      index -= characterSet.length
    }
    output += characterSet[index]

    prev++
  }

  return output
}

export const codePolybius = (square:string[][] , inputString: string) => {
  let output = ""
  inputString = clearInput(inputString)

  for (let i = 0; i < inputString.length; i++) {
    let coords = searchForRune2D(inputString[i], square)
    output += `${coords.x}${coords.y} `
  }

  return output
}

export const codeHomophonic = (map: any, inputString: string) => {
  let output = ""
  inputString = clearInput(inputString);

  for (let i = 0; i < inputString.length; i++) {
    let index = Math.floor(Math.random() * map[inputString[i]].length);
    output += map[inputString[i]][index];
  }

  return output
}

export const codeTrithemius = (key: string, inputString: string, characterSet: string[]) => {
  let output = ""
  let index = characterSet.join("").indexOf(key) + 1
  inputString = clearInput(inputString);
  for (let i = 0; i < inputString.length; i++) {
    output += codeCaesar(characterSet, inputString[i], index)
    index++
  }

  return output
}

export const codeVigenere = (characterSet: string[], inputString: string, key: string) => {
  let output = ""
  const keyList = Array.from(key)
  let counter = 0
  inputString = clearInput(inputString)

  for (let i = 0; i < inputString.length; i++) {
    let character = inputString[i];
    let shift = characterSet.join("").indexOf(keyList[counter]) + 1

    output += codeCaesar(characterSet, character, shift)

    counter = counter === keyList.length - 1 ? 0 : counter + 1
  }

  return output
}
