// impossibly difficult command line tool to master: vi
// or a much easier graphical text editor: sublime

// I'll write a program that can obfuscate a word
// I don't know how yet.

// console.log("About to start");
// Step 1: get word

var arguments = process.argv
// console.log("Arguments: ",arguments);

// step 2: put it in a variable
var word = arguments[2];
// console.log("Obfuscating the word: ", word);

// step 3: look at each letter
for (i=0; i<word.length; i++) {
  // step 4: if letter is E replace with 3
  if (word[i] == 'e') {
    console.log("3");
  } else {
    console.log(word[i])
  }
}
// step 5: print out result

