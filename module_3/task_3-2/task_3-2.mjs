"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));



printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
    

let line1 = "";
for (let i = 1; i <= 10; i++) {
   line1 += i + " ";
}
printOut(line1.trim());  
printOut(newLine);
    

let line2 = "";
for (let j = 10; j >= 1; j--) {
    line2 += j + " ";
}
printOut(line2.trim());  

printOut(newLine);



printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 
 
const targetNumber = 45 ;
    

 let guessedNumber = 0 ;
    
 
 while (guessedNumber !== targetNumber) {
    
    guessedNumber = Math.floor(Math.random() * 60) + 1 ;
 }
    
 
 printOut("The computer guessed the correct number: " + guessedNumber) ;

 printOut("--- Part 3 ------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const targetNumber2 = 999999;  


let guessedNumber2 = 0;
let guessCount2 = 0;


const startTime = Date.now();


while (guessedNumber2 !== targetNumber2) {
    guessedNumber2 = Math.floor(Math.random() * 1000000) + 1;  
    guessCount2++;  
}


const endTime = Date.now();


const elapsedTime = endTime - startTime;


printOut("The computer guessed the correct number: " + guessedNumber2);
printOut("Number of guesses the computer used: " + guessCount2);
printOut("Time taken (in milliseconds): " + elapsedTime);

printOut(newLine);



printOut("--- Part 4 ----------------------------------------------------------------------------------------------");


let result = " " ;   


for (let num = 2; num < 200; num++) {
    let isPrime = true;  

   
    let divisor = 2;
    while (divisor <= Math.sqrt(num)) { 
        if (num % divisor === 0) {  
            isPrime = false;
            break;  
        }
        divisor++;
    }

    
    if (isPrime) {
        result = result + "   " + num ;  
    }
}

printOut(result) ;
printOut(newLine);



printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let row = ""; 

for (let i = 1; i <= 9; i++) { 
    row = ""; 
   
    for (let j = 1; j <= 7; j++) { 
        row += "K" + j + "R" + i + "\t"; 
    }
    
    printOut(row); 
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
        return 'Invalid percentage'; 
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
function getCounts(dice) {
    const counts = {};
    dice.forEach(die => counts[die] = (counts[die] || 0) + 1);
    return counts;
}
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
        dice.sort((a, b) => a - b); 

        const counts = getCounts(dice);

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
countRollsToCombination();
printOut(newLine)