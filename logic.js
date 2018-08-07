// This function 'shows its work' a little more.
// It will print all the divisors for a given number. 
// The function will also give explanations for the cases of 1, and integers less than one. 

function primeChecker(numberBeingChecked) {
    var numberOfDivisors = 0;
    if (numberBeingChecked <= 0) {
        console.log(numberBeingChecked + " is not a prime number.");
        console.log("Prime numbers must be positive integers.")
    } else if (numberBeingChecked === 1) {
        console.log("1 is neither composite nor prime.");
        console.log("A prime number is a positive integer divisible by two numbers: 1 and itself.");
        console.log("A composite number is divisible by 1, itself, and at least one other number.");
        console.log("1 is divisible by only one number, so it does not meet either definition.");
    } else {
        for (var divisor = 1; divisor <= numberBeingChecked; divisor++) {
            if (numberBeingChecked % divisor === 0) {
                console.log(numberBeingChecked + " is divisble by " + divisor);
                numberOfDivisors++;
            }
        }
        console.log("Number of divisors: " + numberOfDivisors);
        if (numberOfDivisors === 2) {
            console.log(numberBeingChecked + " is prime.");
        } else if (numberOfDivisors !== 2) {
            console.log(numberBeingChecked + " is not prime.");
        }
    }
};

// This function will return whether a number is prime or not, but doesn't do anything else. 
// The function works by counting how many divisors the number has. 
// The logic will also handle special cases like 1, 0 and negative integers. 

function simplePrimeChecker(numberBeingChecked) {
    var numberOfDivisors = 0;
    for (var divisor = 1; divisor <= numberBeingChecked; divisor++) {
        if (numberBeingChecked % divisor === 0) {
            console.log(numberBeingChecked + " is divisble by " + divisor);
            numberOfDivisors++;
        }
    }
    if (numberOfDivisors === 2) {
        console.log(numberBeingChecked + " is prime.");
    } else if (numberOfDivisors !== 2) {
        console.log(numberBeingChecked + " is not prime.");
    }
};