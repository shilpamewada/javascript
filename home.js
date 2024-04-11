// Function to calculate the sum of digits in a given number
function sumOfDigits(number) {
    // Initialize sum to 0
    let sum = 0;

    // Iterate until the number becomes 0
    while (number > 0) {
        // Extract the last digit using modulo
        let rem = number % 10;

        // Add the digit to the sum
        sum += rem;

        // Update the number by removing the last digit
        number = Math.floor(number / 10);
    }
    return sum;
}

console.log(sumOfDigits(808));

// / Function to reverse a given number

function reverseNumber(number) {
    // Initialize variables
    let reversed = 0;

    // Iterate until the number becomes 0
    while (number > 0) {
        // Extract the last digit using modulo
        let remainder= number % 10;

        // Append the digit to the reversed number
        reversed = (reversed * 10) + remainder;

        // Update the number by removing the last digit
        number = Math.floor(number / 10);
    }

    // Return the reversed number
    return reversed;
}
console.log(reverseNumber(123));

// Function to calculate the factorial of a non-negative integer using a while loop

        function factorial(n) {
    // Check if the input is non-negative
    if (n < 0) {
        return "Invalid input";
    }

    // Initialize the result to 1
    let result = 1;

    // Initialize a variable i to 1
    let i = 1;

    // Use a while loop to calculate the factorial
    while (i <= n) {
        // Multiply result by the current value of i
        result *= i;

        // Increment i for the next iteration
        i++;
    }

    return result;
}
console.log(factorial(0));


// / Function to calculate the power of a given base and exponent using a while loop

function calculatePower(base, exponent) {
    if (exponent < 0) {
        return "Invalid";
    }

    // Initialize result to 1
    let result = 1;

    // Initialize a variable i to 0
    let i = 0;

    // Use a while loop to calculate the power
    while (i < exponent) {
        // Multiply base by itself 'exponent' times
        result *= base;

        // Increment i for the next iteration
        i++;
    }

    return result;
}

console.log(calculatePower(3,3));

// / Function to check if a given positive integer is a prime number using a while loop
function isPrime(number) {
    // Check if the number is greater than 1
    if (number <= 1) {
        return false;
    }

    // Initialize divisor to 2
    let divisor = 2;

    // Use a while loop to check for divisors
    while (divisor <= Math.sqrt(number)) {
        // If the number is divisible by the current divisor, it is not a prime number
        if (number % divisor === 0) {
            return false;
        }

        // Increment the divisor for the next iteration
        divisor++;
    }

    // If no divisor is found, the number is a prime number
    return true;
}
console.log(isPrime(7));
console.log(isPrime(12));

// Function to check if a given string is a palindrome using a while loop

     function isPalindrome(str) {
    // Initialize pointers
    let start = 0;
    let end = str.length - 1;

    // Use a while loop to check for palindrome
    while (start < end) {
        // Compare characters at the corresponding positions
        if (str[start] !== str[end]) {
            return  "not palindromme"; // Not a palindrome
        }

        // Move the pointers towards each other
        start++;
        end--;
    }

    return "Palindrome";
}
console.log(isPalindrome("mom"));
console.log(isPalindrome("hello"));

// Function to calculate the sum of prime numbers up to a given number using a while loop

function isPrime(number) {
    let i = 2;
    while (i <= Math.sqrt(number)) {
        if (number % i === 0) {
            return "not prime";
          
        }
        i++;
   
    }
    return "prime";
}
function sumOfPrimesUpTo(sumnum) {
    let sum = 0;
    let d = 2;

    while (d<= sumnum) {
        if (isPrime(d)) {
            sum += d;
        }
        d++;
    }

    return sum;
}


console.log(sumOfPrimesUpTo(25));



// // binary to decimal conversation


function binaryFind(binarynumber){
    decnum=0;
    power=0;
    while(binarynumber>0){
        if(binarynumber%10===1){
            decnum=decnum+(1<<power);   
        }
        power++;
        binarynumber=Math.floor(binarynumber/10);
        
    }
    return decnum;

}
console.log (binaryFind(10101));



// random 4 digit token
function fourDigitToken(){
    const random=Math.random()*6990;
    return Math.floor(1000+random);
}
console.log(fourDigitToken());