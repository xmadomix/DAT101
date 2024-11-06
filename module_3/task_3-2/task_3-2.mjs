"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));



printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
    
// First line: Count from 1 to 10
let line1 = "";
for (let i = 1; i <= 10; i++) {
   line1 += i + " ";
}
printOut(line1.trim());  // Prints the line counting from 1 to 10
printOut(newLine);
    
// Second line: Count from 10 to 1
let line2 = "";
for (let j = 10; j >= 1; j--) {
    line2 += j + " ";
}
printOut(line2.trim());  // Prints the line counting from 10 to 1

printOut(newLine);



printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 
 // Set the target number that the computer is trying to guess
const targetNumber = 45 ;
    
// Variable to hold the computer's guess
 let guessedNumber = 0 ;
    
 // Use a "while" loop to keep guessing until the guess matches the target number
 while (guessedNumber !== targetNumber) {
    // Generate a random number between 1 and 60
    guessedNumber = Math.floor(Math.random() * 60) + 1 ;
 }
    
 // Print the correct guess once the loop has completed
 printOut("The computer guessed the correct number: " + guessedNumber) ;

 printOut("--- Part 3 ------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Set the target number for the second guessing game (between 1 and 1 million)
const targetNumber2 = 999999;  // Example target number (1 million)

// Variable to hold the computer's guess and the number of guesses
let guessedNumber2 = 0;
let guessCount2 = 0;

// Record the start time for the second game
const startTime = Date.now();

// Use a "while" loop to keep guessing until the guess matches the target number
while (guessedNumber2 !== targetNumber2) {
    guessedNumber2 = Math.floor(Math.random() * 1000000) + 1;  // Guess a number between 1 and 1 million
    guessCount2++;  // Increment the guess count with each iteration
}

// Record the end time for the second game
const endTime = Date.now();

// Calculate the time it took to guess (in milliseconds)
const elapsedTime = endTime - startTime;

// Print results for Part 3
printOut("The computer guessed the correct number: " + guessedNumber2);
printOut("Number of guesses the computer used: " + guessCount2);
printOut("Time taken (in milliseconds): " + elapsedTime);

printOut(newLine);



printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let result = " " ;   

// Loop through numbers from 2 to 199
for (let num = 2; num < 200; num++) {
    let isPrime = true;  // Assume the number is prime unless proven otherwise
    

    // Check if num is divisible by any number between 2 and num-1
    let divisor = 2;
    while (divisor <= Math.sqrt(num)) {  // We only need to check up to the square root of num
        if (num % divisor === 0) {  // If num is divisible by divisor, it's not prime
            isPrime = false;
            break;  // No need to check further divisors
        }
        divisor++;
    }

    // If the number is prime, print it
    if (isPrime) {
        result = result + "   " + num ;  // Output the prime number
    }
}

printOut(result) ;
printOut(newLine);



printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let row = ""; // Start with an empty string for each row

for (let i = 1; i <= 9; i++) { // Outer loop for rows (1 to 9)
    row = ""; // Reset the row for each new row in the outer loop
   
    for (let j = 1; j <= 7; j++) { // Inner loop for columns (1 to 7)
        row += "K" + j + "R" + i + "\t"; // Add "K" + column number + "R" + row number
    }
    
    printOut(row); // Print the row after the inner loop finishes
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function getGrade(student_score) {
    let percentage = (student_score/236) * 100 ;
    if (percentage >= 89 && percentage <= 100) {
        return 'A';
    } else if (percentage >= 77 && percentage < 89) {
        return 'B';
    } else if (percentage >= 65 && percentage < 77) {
        return 'C';
    } else if (percentage >= 53 && percentage < 65) {
        return 'D';
    } else if (percentage >= 41 && percentage < 53) {
        return 'E';
    } else if (percentage >= 0 && percentage < 41) {
        return 'F';
    } else {
        return 'Invalid percentage'; // In case the input is outside the range 0-100
    }
}

function RandomNumber() { 
    return Math.floor(Math.random() * 236) + 1
}

let student1 = getGrade(RandomNumber()) ;
let student2 = getGrade(RandomNumber()) ;
let student3 = getGrade(RandomNumber()) ;
let student4 = getGrade(RandomNumber()) ;
let student5 = getGrade(RandomNumber()) ;

printOut(student1) ;
printOut(student2) ;
printOut(student3) ;
printOut(student4) ;
printOut(student5) ;


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to get the count of each die value in a roll
function getCounts(dice) {
    const counts = {};
    dice.forEach(die => counts[die] = (counts[die] || 0) + 1);
    return counts;
}

// Function to check each combination using counts
function checkCombinations(dice, counts) {
    const results = {
        yahtzee: Object.values(counts).includes(5),
        fullStraight: (dice.includes(1) && dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5)) ||
                      (dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5) && dice.includes(6)),
        threePairs: Object.values(counts).filter(count => count === 2).length === 3,
        fourOfAKind: Object.values(counts).includes(4),
        twoOfAKind: Object.values(counts).includes(2)
    };
    return results;
}

function countRollsToCombination() {
    let rollCount = 0;
    let combinationsFound = {
        yahtzee: false,
        fullStraight: false,
        threePairs: false,
        fourOfAKind: false,
        twoOfAKind: false
    };

    while (!Object.values(combinationsFound).every(Boolean)) {
        rollCount++;
        let dice = [rollDice(), rollDice(), rollDice(), rollDice(), rollDice()];
        dice.sort((a, b) => a - b);  // Sort once for full straight check

        // Get counts for all dice values in this roll
        const counts = getCounts(dice);

        // Check for combinations that haven't been found yet
        const results = checkCombinations(dice, counts);

        if (results.yahtzee && !combinationsFound.yahtzee) {
            printOut(`Yahtzee! It took ${rollCount} rolls.`);
            combinationsFound.yahtzee = true;
        }
        if (results.fullStraight && !combinationsFound.fullStraight) {
            printOut(`Full Straight! It took ${rollCount} rolls.`);
            combinationsFound.fullStraight = true;
        }
        if (results.threePairs && !combinationsFound.threePairs) {
            printOut(`Three Pairs! It took ${rollCount} rolls.`);
            combinationsFound.threePairs = true;
        }
        if (results.fourOfAKind && !combinationsFound.fourOfAKind) {
            printOut(`Four of a Kind (Tower)! It took ${rollCount} rolls.`);
            combinationsFound.fourOfAKind = true;
        }
        if (results.twoOfAKind && !combinationsFound.twoOfAKind) {
            printOut(`Two of a Kind! It took ${rollCount} rolls.`);
            combinationsFound.twoOfAKind = true;
        }
    }
}

// Example usage:
countRollsToCombination();
printOut(newLine)