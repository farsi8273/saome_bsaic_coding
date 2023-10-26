function swapConsecutiveCharacters(inputString) {
    // Convert the string to an array of characters for easier manipulation
    const characters = inputString.split("");
  
    for (let i = 0; i < characters.length - 1; i += 2) {
      // Swap consecutive characters at even indices (0, 2, 4, ...)
      const temp = characters[i];
      characters[i] = characters[i + 1];
      characters[i + 1] = temp;
    }
  
    // Join the array back into a string and return the swapped string
    const swappedString = characters.join("");
    return swappedString;
  }
  
  // Example 1
  console.log(swapConsecutiveCharacters("abcdef")); // badcfe
  console.log(swapConsecutiveCharacters("AlmaBetter")); // lAameBttre