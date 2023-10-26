function shortestDistance(wordsDict, word1, word2) {
    let minDistance = Infinity;
    let index1 = -1;
    let index2 = -1;
  
    for (let i = 0; i < wordsDict.length; i++) {
      const word = wordsDict[i];
  
      if (word === word1) {
        index1 = i;
        if (index2 !== -1) {
          minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
      } else if (word === word2) {
        index2 = i;
        if (index1 !== -1) {
          minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
      }
    }
  
    return minDistance;
  }
  // Example 1
  const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
  console.log(shortestDistance(wordsDict, "coding", "makes")); // 1
  
  // Example 2
  const wordsDict2 = [
    "apple",
    "banana",
    "cherry",
    "apple",
    "date",
    "banana",
    "fig",
  ];
  console.log(shortestDistance(wordsDict2, "apple", "fig")); // 3
  
  // 7. Flip Game----------->>>
  function findMove(s) {
    const possibleMoves = [];
  
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === "+" && s[i + 1] === "+") {
        const newState = s.substring(0, i) + "--" + s.substring(i + 2);
        possibleMoves.push(newState);
      }
    }
  
    return possibleMoves;
  }
  
  // Example usage:
  const inputString = "++++";
  const moves = findMove(inputString);
  console.log(moves); // Output: ["--++", "+--+", "++--"]
  