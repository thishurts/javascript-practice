/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    str = str.toLowerCase();
    let i = 0;
    let j = str.length - 1;
    while(i != j){
        if ((/[a-z]/).test(str[i]) && (/[a-z]/).test(str[j])){
            if(str[i] != str[j]) return false;
            i++;
            j--;
            continue;
        }
        if (!(/[a-z]/).test(str[i]))  i++; 
        if (!(/[a-z]/).test(str[j]))  j--;  
    }
    return true;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};