/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let size = numbers.size;
    if(size = 0)    return 0;
    if(size = 1)    return numbers[0];
    if(size = 2 && numbers[0] == numbers[1])    return numbers[0];
    let temp = numbers[0];
    let counts = {temp: 1};
    for(let i = 1; i < size; i++){
        temp = numbers[i];
        if(counts.includes(temp)){
            counts.temp = counts.temp + 1;
            if(counts.temp >= floor(size/2))     return temp;
        }   
        else 
            counts.push({temp:1});
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};