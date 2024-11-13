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

let student = getGrade(RandomNumber()) ;


printOut("the student has achieved an " + student) ;

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rollDice() {
    let dice = [];
    for (let i = 0; i < 6; i++) {
      dice.push(Math.floor(Math.random() * 6) + 1);
    }
    return dice;
  }
  

  function isFullStraight(dice) {
    const sortedDice = dice.sort((a, b) => a - b);
    return sortedDice.join('') === '123456';
  }
  

  function isThreePairs(dice) {
    const count = {};
    for (let num of dice) {
      count[num] = (count[num] || 0) + 1;
    }
    const pairCounts = Object.values(count).filter(val => val === 2);
    return pairCounts.length === 3;
  }
  
  function isTwoAndFour(dice) {
    const count = {};
    for (let num of dice) {
      count[num] = (count[num] || 0) + 1;
    }
    const values = Object.values(count);
    return values.includes(2) && values.includes(4);
  }
  

  function isYahtzee(dice) {
    return new Set(dice).size === 1;
  }
  
  
  function simulateGame() {
    let throws = 0;
    let fullStraight = false;
    let threePairs = false;
    let twoAndFour = false;
    let yahtzee = false;
  
    while (!fullStraight || !threePairs || !twoAndFour || !yahtzee) {
      throws++;
      let dice = rollDice();
      
      if (!fullStraight && isFullStraight(dice)) {
        printOut(`Full straight (1-2-3-4-5-6) achieved in throw ${throws}: ${dice}`);
        fullStraight = true;
      }
  
      if (!threePairs && isThreePairs(dice)) {
        printOut(`Three pairs achieved in throw ${throws}: ${dice}`);
        threePairs = true;
      }
  
      if (!twoAndFour && isTwoAndFour(dice)) {
        printOut(`Two of a kind and four of a kind (tower) achieved in throw ${throws}: ${dice}`);
        twoAndFour = true;
      }
  
      if (!yahtzee && isYahtzee(dice)) {
        printOut(`Yahtzee (all the same) achieved in throw ${throws}: ${dice}`);
        yahtzee = true;
      }
    }
  
  }

  simulateGame();
  printOut(newLine) ;
