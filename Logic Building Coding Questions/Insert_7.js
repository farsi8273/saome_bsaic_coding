function insert7(inputString) {
  let result = "";
  let count = 0;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (char !== " ") {
      count++;

      if (count === 6) {
        result += char + "7";
        count = 0;
      } else {
        result += char;
      }
    } 
    else {
      result += char;
    }
  }

  return result;
}

const str = "Hello World and Universe!";
console.log(insert7(str)); // Hello W7orld an7d Unive7rse!
