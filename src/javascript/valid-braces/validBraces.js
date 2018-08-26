const bracesMap = {
  '}' : '{',
  ')' : '(',
  ']' : '['
};

export const validBraces = (string) => {
  const braces = [];

  for (let i = 0; i < string.length; i++) {
    if(!bracesMap.hasOwnProperty(string[i])) {
      braces.push(string[i]);
    } else {
      const lastBrace = braces[braces.length - 1];

      if (bracesMap[string[i]] === lastBrace) {
        braces.pop()
      } else {
        return false;
      }
    }
  }

  return !braces.length;
}