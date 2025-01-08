"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
///* Put your code below here!*/

const printTodaysDate = () => {
    const today = new Date().toLocaleDateString('no-NB', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    printOut(`Today's date in Norwegian format: ${today}`);
};

printTodaysDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
///* Put your code below here!*/

function getTodaysDateAndCountdown() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString('no-NB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const releaseDate = new Date('2025-05-14');
    const daysLeft = Math.ceil((releaseDate - today) / (1000 * 60 * 60 * 24));

    printOut(`Today is ${norwegianDate}`);
    printOut(`Countdown to 2XKO release: ${daysLeft} days left, Buckle up, GET OUT! 🗣️🔥🔥🔥`);
}

getTodaysDateAndCountdown();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
///* Put your code below here!*/

const calculateCircle = (radius) => {
    const values = {
        Diameter: 2 * radius,
        Circumference: (2 * Math.PI * radius).toFixed(2),
        Area: (Math.PI * Math.pow(radius, 2)).toFixed(2)
    };
    Object.entries(values).forEach(([key, value]) => printOut(`${key}: ${value}`));
};

calculateCircle(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
///* Put your code below here!*/

const calculateRectangle = ({ width, height }) => {
    printOut(`Circumference: ${2 * (width + height)}`);
    printOut(`Area: ${width * height}`);
};

calculateRectangle({ width: 10, height: 5 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
///* Put your code below here!*/

const convertTemperature = (temp, scale) => {
    const conversions = {
        celsius: { c: temp, f: (temp * 9/5 + 32).toFixed(1), k: (temp + 273.15).toFixed(1) },
        fahrenheit: { c: ((temp - 32) * 5/9).toFixed(1), f: temp, k: ((temp - 32) * 5/9 + 273.15).toFixed(1) },
        kelvin: { c: (temp - 273.15).toFixed(1), f: ((temp - 273.15) * 9/5 + 32).toFixed(1), k: temp }
    };
    const result = conversions[scale.toLowerCase()];
    if (!result) return printOut("Unknown temperature scale!");
    printOut(`Celsius: ${result.c}°C, Fahrenheit: ${result.f}°F, Kelvin: ${result.k}K`);
};

convertTemperature(300, 'Kelvin');
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
///* Put your code below here!*/

function priceWithoutVAT(gross, vatGroup) {
    const vatRates = {
        'normal': 25,
        'food': 15,
        'hotel': 10,
        'transport': 10,
        'cinema': 10
    };

    const vatRate = vatRates[vatGroup.toLowerCase()];
    if (vatRate === undefined) {
        printOut("Unknown VAT group!");
        return NaN;
    }

    const netPrice = (100 * gross) / (vatRate + 100);
    printOut(`Net price (without VAT) for ${vatGroup}: ${netPrice.toFixed(2)}`);
    return netPrice;
}

priceWithoutVAT(125, 'normal');
priceWithoutVAT(100, 'food');
priceWithoutVAT(110, 'hotel');
priceWithoutVAT(150, 'goblins');


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
///* Put your code below here!*/

function calculateSpeedDistanceTime(distance, time, speed) {
    let result;
    if (speed === undefined && distance !== undefined && time !== undefined) {
        result = distance / time;
        printOut(`Calculated Speed: ${result} units/time`);
    } else if (time === undefined && distance !== undefined && speed !== undefined) {
        result = distance / speed;
        printOut(`Calculated Time: ${result} time units`);
    } else if (distance === undefined && speed !== undefined && time !== undefined) {
        result = speed * time;
        printOut(`Calculated Distance: ${result} units`);
    } else {
        printOut("Error: Please provide exactly two values to calculate the third.");
        return NaN;
    }
    return result;
}

calculateSpeedDistanceTime(100, 2, undefined);
calculateSpeedDistanceTime(undefined, 2, 50);
calculateSpeedDistanceTime(100, undefined, 50);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
///* Put your code below here!*/

const padText = (text, maxSize, char, end = true) => {
    const padCount = maxSize - text.length;
    const padding = char.repeat(padCount);
    printOut(end ? text + padding : padding + text);
};

padText("Hello", 10, "*", true);
padText("World", 10, "-", false);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
///* Put your code below here!*/

const printNumberPattern = () => {
    let num = 1;
    const lines = 7;
    for (let i = 0; i < lines; i++) {
        const left = Array.from({ length: 3 }, () => num++).join(" ");
        num += 3; // Skip 3
        const right = Array.from({ length: 3 }, () => num++).join(" ");
        printOut(`${left} = ${right}`);
    }
    printOut("Mathematics is fun!");
};

printNumberPattern();
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
///* Put your code below here!*/

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

[9, 6].forEach(num => printOut(`Factorial of ${num}: ${factorial(num)}`));
printOut(newLine);
