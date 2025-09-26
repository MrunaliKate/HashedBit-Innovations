
// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctFn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
let string = "I love my Inida";
let correctedSentence = correctFn(string, "Inida", "India");
console.log(correctedSentence);