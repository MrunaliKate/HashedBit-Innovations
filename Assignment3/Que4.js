
// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str = "The role of JavaScript in web applications is to make websites dynamic, interactive, and user-friendly.";
let lowerStr = str.toLowerCase();
let vowels = "aeiou";
let vowelCount = 0;
let consonantCount = 0;
for (let char of lowerStr) {
    if (char >= 'a' && char <= 'z') { 
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}
console.log("Vowels:", vowelCount);       
console.log("Consonants:", consonantCount);