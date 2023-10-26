// function countOccurences(str,char){
//     let count=0;
//     for(const word of str){
//         if(word===char){
//             count++
//         }
//     }
//     return count

// }
// console.log(countOccurences("you are a good boy",'o'));

// code without any loop

// function countOccurrences(str, char) {
   
//     const characters = str.split('');
  
   
//     const filteredCharacters = characters.filter(function (c) {
//       return c === char;
//     });
  
//     const filteredString = filteredCharacters.join('');
  

//     return filteredString.length;
//   }

  
//   const result = countOccurrences("you are my hero", "o");
//   console.log(result);

function ocurences(str,char){
    let splitedchar=str.toLowerCase().split("");
    let filterchar=splitedchar.filter(function(c){
        return (c===char)
    });
    occurenceChar=filterchar.join("");
    return occurenceChar.length

}
console.log(ocurences("this is my bro indi pindi","i"));