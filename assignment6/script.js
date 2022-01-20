// Assignment 6 Part A
const team1 = "Nets";
const team2 = "Knicks";


const getAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const getWinner = (team1Avg, team2Avg) => {
    if(team1Avg === team2Avg) {
        if(team1Avg >= 90)  return "Draw";
    }
    
    if(team1Avg > team2Avg){
        if(team1Avg >= 100) return `The winner is ${team1}`;
    }
    else {
        if(team2Avg >= 100) return `The winner is ${team2}` ;
    }
    
    return `There was no winner`;
}

const checkWhoWon = () => {
    //Store scores
    const getNetsScore1 = Number(prompt("Enter game 1 nets score"));
    const getKnicksScore1 = Number(prompt("Enter game 1 knicks score"));

    const getNetsScore2 = Number(prompt("Enter game 2 nets score"));
    const getKnicksScore2 = Number(prompt("Enter game 2 knicks score"));

    const getNetsScore3 = Number(prompt("Enter game 3 nets score"));
    const getKnicksScore3 = Number(prompt("Enter game 3 knicks score"));

    //store averages
    const team1Avg = getAvg(getNetsScore1, getNetsScore2, getNetsScore3);
    const team2Avg = getAvg(getKnicksScore1, getKnicksScore2, getKnicksScore3);

    //log the winner
    console.log(getWinner(team1Avg, team2Avg));
}

checkWhoWon();


// Assignment 6 Part B

const printBill = (billAmount, tipAmount) => {
    const tip = (tipAmount / 100) * billAmount;
    const total = tip + billAmount;
    console.log(`The bill was $${billAmount}, the tip was $${tip}, the total value was $${total}.`);
}

const tipCalculator = billParam => {
     switch(billParam >= 30 && billParam <= 100){
     case true:
        printBill(billParam, 15);
        break;
     case false:
        printBill(billParam, 20);
        break;
     default:
        console.log("could not calculate tip");
     }
}

// TEST DATA
tipCalculator(285);
tipCalculator(26);
tipCalculator(90);



// Assignment 6 Part C

// Create convert to celsius function
const ConvertCelsiusToFahrenheit = celsius => {
    const fahrenheitConverted = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheitConverted}°F`);
}

// Create convert to fahrenheit function
const ConvertFahrenheitToCelsius = fahrenheit => {
    const celsiusConverted = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsiusConverted}°C`);
}

// Test data
ConvertCelsiusToFahrenheit(100);
ConvertCelsiusToFahrenheit(0);
ConvertCelsiusToFahrenheit(10);

ConvertFahrenheitToCelsius(32);
ConvertFahrenheitToCelsius(10);
ConvertFahrenheitToCelsius(102);

