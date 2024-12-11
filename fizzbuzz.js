// Initialize an empty array to store the FizzBuzz output
var output = [];

// Initialize the variable 'a' with a starting value of 1
var a = 1;

// Define the fizzBuzz function
function fizzBuzz() {
    // Calculate the remainder when 'a' is divided by 3
    var x = a % 3;

    // Calculate the remainder when 'a' is divided by 5
    var y = a % 5;

    // Check if 'a' is divisible by both 3 and 5
    if (x === 0 && y === 0) {
        // Push "fizzBuzz" into the output array if the condition is true
        output.push("fizzBuzz");
    }
    // Check if 'a' is divisible by 3 only
    else if (x === 0) {
        // Push "fizz" into the output array if the condition is true
        output.push("fizz");
    }
    // Check if 'a' is divisible by 5 only
    else if (y === 0) {
        // Push "Buzz" into the output array if the condition is true
        output.push("Buzz");
    }
    // If none of the above conditions are true, push the number itself
    else {
        output.push(a);
    }

    // Increment the value of 'a' by 1 for the next function call
    a++;

    // Print the updated output array to the console
    console.log(output);
}
