function titleCase(sentence) {
	// write your code here
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}
console.log(titleCase("this is your body"));


//second Approach with map function

function titleCase(sentence) {
  let word = sentence.toLowerCase().split(" ");

  let capitalWords = word.map(function (words) {
    return words.charAt(0).toUpperCase() + words.slice(1);
  });
  return capitalWords.join(" ");
}


console.log(titleCase("this is your bidy"));
