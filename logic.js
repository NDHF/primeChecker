function primeChecker(numberBeingChecked) {
    var numberOfDivisors = 0;
    for (var divisor = 1; divisor <= number; divisor++) {
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
};