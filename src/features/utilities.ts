export const searchForRune2D = (character:string, characterSet:string[][]) => {
    for (let i = 0; i < characterSet.length; i++) {
      for (let j = 0; j < characterSet[i].length; j++) {
        if (characterSet[i][j] === character) {
          return { x: i, y: j };
        }
      }
    }
  
    return { x: -1, y: -1 };
  };
  
  export const clearInput = (inputString:string) => {
    return inputString.replace(/[^a-zA-Z]/g, "").toLowerCase();
  }
  