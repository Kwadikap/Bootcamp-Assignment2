const city = 'New York City';
const bourough = 'Bronx';
const population = 100000000;
const friendName = 'John';
const age = 10;

console.log(`My bestfriend ${friendName} 
            lives in ${city} and the ppulation of ${bourough} 
            is ${population}`);

if (age > 16) {
    console.log("You can drive");
}

else if (age > 30) {
    console.log("It seems like you should already have a driver license");
}

else if (age < 10) {
    console.log("You are too young to get a driver license now");
}

else console.log("You can't drive now, but you only need to wait for another ", 16 - age, " years");





//Assignment 5 part A
const tempCelsius = prompt('Enter a temperature in degrees celsius');

const convertToFahrenheit = (tempCelsius * 9/5) + 32;

console.log(`${tempCelsius}°C is ${convertToFahrenheit}°F`);

const tempFahrenheit = prompt("Enter a temperature in degrees Fahrenheit");

const convertToCelsius = (tempFahrenheit - 32) / 1.8000;

console.log(`${tempFahrenheit}°F is ${convertToCelsius}°C`);


// Assignment 5 part B

const johnWeight = prompt("Hey John what's your weight ? ");

const johnHeight = prompt("Just one more thing John, what's your height?");

const johnBMI = johnWeight / (johnHeight ** 2);

const lucasWeight = prompt("Hey Lucas what's your weight ? ");

const lucasHeight = prompt("Just one more thing Lucas, what's your height?");

const lucasBMI = lucasWeight / (lucasHeight ** 2);

const lucasHigherBMI = lucasBMI > johnBMI ? true : false;

console.log(lucasHigherBMI ? "Lucas' BMI is higher than John's!" : "John's BMI is higher than Lucas'!");

console.log(lucasHigherBMI ? `"John's BMI (${johnBMI}) is higher
than Lucas’ BMI (${lucasBMI}), that is False!"` : `"John's BMI (${johnBMI}) is higher
than Lucas’ BMI (${lucasBMI}), that is True!"` );


// Assignment part C
const userInput = Number(prompt("Type a number"));


if(!userInput){
    console.log("Please enter a number!");
}

else if (userInput == 10) {
        console.log("You win 10 point");
}
   
else if(userInput == 8){
        console.log("You win 8 points");
}

else {
        console.log("NOT MATCHED!!");
}




