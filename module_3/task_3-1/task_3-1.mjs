"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

let wakeUpTime = 7 ;

if (wakeUpTime === 7) {
  printOut ("If I wake up at exactly 7 o'clock then I can catch the bus to school.") ; 
}
else if (wakeUpTime === 8) { 
    printOut ("If I wake up at exactly 7 o'clock, I can take the bus to school, otherwise if I wake up exactly at 8 o'clock, I can take the train to school, otherwise I have to take the car to school") ;
}  
else {
  printOut ("I wont be able to catch the bus to school.") ;
}
printOut(newLine);



printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number = 0;
number = parseInt(number) ; 

if (number > 0) {
  printOut ("positive") ;
} 
else if (number < 0) {
  printOut ("negative") ;
}
else {
  printOut ("zero") ; 
}
printOut(newLine);



printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let imageSize = Math.floor (Math.random() * 8) + 1 ;
printOut ("Uploaded image size:", imageSize, "MP");

let minSize = 4;
let maxSize = 6;

if ( imageSize  >= maxSize ) {
  printOut ("Image is too large") ;
} else if ( imageSize <= minSize ) {
  printOut ("Thank you") ;
} else {
  printOut ("The Image is too small") ;
}
printOut(newLine);



printOut("--- Part 8, 9, 10 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList = ["January", "February", "Mars", "April", "Mai",
  "June", "July", "August", "September", "October", "November", "December"] ;
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] ;
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];


printOut("Selected month:" + monthName ) ;

if (monthName === "Mars" || monthName === "Mai" ) {
  printOut ("The gallery is closed.") ;
} else if (monthName === "April") {
  printOut("The gallery is open in temporary premises.") ;
} else {
  printOut("The gallery is open.") ;
}

  if ( monthName.includes("r") ) {
    printOut ("You must take vitamin D") ;
  } else {
    printOut ("You do not need to take vitamin D") ;
  }

const monthIndex = monthList.indexOf(monthName) ;
const days = daysInMonth[monthIndex] ;
printOut ("Number of days in: " + monthName + " is " + days) ;

printOut(newLine);

