
// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    let words = paragraph.trim().split(/\s+/);
    return words.length;
}
let paragraph = "JavaScript is a single-threaded language that executes one task at a time.";
console.log(countWords(paragraph)); 