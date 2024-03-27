/* 
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers.  
It should take two numbers as inputs and return the larger number.  
If They're equal, return either one.

Exercise 1 has been completed for you:
*/
const maxOfTwoNumbers = (x, y) => {
    if(x >= y) {
        return x;
    } else {
        return y;
    }
}
console.log('Exercise 1 Result: ', maxOfTwoNumbers(3, 9));

/*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and 
return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThree = (x, y, z) => {
    if(x >= y && x >= z) {
        return x;
    } else if(y >= x && y >= z)  {
        return y;
    } else if(z >= x && z >= y) {
        return z;
    }
}
console.log('Exercise 2 Result:', maxOfThree(25, 10, 21));


/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

const isCharAVowel = (x) => {
    if(x === 'a') {
        return true;
    } else if (x === 'e') {
        return true;
    } else if (x === 'i') {
        return true;
    } else if (x === 'o') {
        return true;
    } else if (x === 'u') {
        return true;
    } else {
        return false;
    }
}
console.log('Exercise 3 Result:',isCharAVowel('o'));


/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

const sumArray = (x, y, z) => {
    return x + y + z
}
console.log('Exercise 4 Result:', sumArray(8, 9, 10));


/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

const multiplyArray = (a, b, c, d, e) => {
    return a * b * c * d * e
}
console.log('Exercise 5 Result:', multiplyArray(2, 4, 3, 2, 10));


/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

const reverseString = (x) => {
    return x.split('').reverse().join('');    
}

console.log('Exercise 6 Result:', reverseString('Hello'));


/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/

const longestStringInArray = (a, b, c, d) => {
    if(a.length >= b.length && a.length >= c.length && a.length >= d.length) {
        return a.length;
    } else if (b.length >= a.length && b.length >= c.length && b.length >= d.length){
        return b.length;
    } else if (c.length >= a.length && c.length >= b.length && c.length >= d.length) {
        return c.length;
    } else if (d.length >= a.length && d.length >= b.length && d.length >= c.length) {
        return d.length;
    }
}
console.log('Exercise 7 Result:', longestStringInArray('London', 'Paris', 'New York City', 'Santa Monica'));

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. 

For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

const stringsLongerThan = ([a, b, c], x) => {
    let result = [];
    if (a.length > x) {
        result.push(a);
    }
    if (b.length > x) {
        result.push(b);
    }
    if (c.length > x) {
        result.push(c);
    }
    return result;
}

console.log('Exercise 8 Result:', stringsLongerThan(['what', 'is', 'that'], 2));



// const stringsLongerThan = ([a, b, c], x) => {
//     if(a.length > x && b.length > x && c.length >= x){
//         return a, b, c;
//     } 
   
//     }

// console.log('Exercise 8 Result:', stringsLongerThan(['where', 'are', 'you'], 2));


// const stringsLongerThan = ([a, b, c], x) => {
    
//     if (a.length > x) {
//         return a;
//     }
//     if (b.length > x) {
//        return b;
//     }
//     if (c.length > x) {
//         return c;
//     }
    
// }

// console.log('Exercise 8 Result:', stringsLongerThan(['where', 'are', 'you'], 2));
