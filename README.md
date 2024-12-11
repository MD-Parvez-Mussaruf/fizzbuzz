# fizzbuzz
 Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz”. For numbers which are multiples of both three and five print "FizzBuzz".




Code Overview:

# FizzBuzz logic:

If a is divisible by both 3 and 5, "fizzBuzz" is pushed to the output array.
If a is divisible by only 3, "fizz" is pushed.
If a is divisible by only 5, "Buzz" is pushed.
Otherwise, the number a is pushed.

# Incrementing a:
The value of a is incremented after each call to the function, ensuring the next number is checked.

# Console output:
Each time the function runs, the updated output array is printed to the console


input:

fizzBuzz()

output:

[1]

[1, 2]

[1, 2, "fizz"]

[1, 2, "fizz", 4]

[1, 2, "fizz", 4, "Buzz"]

[1, 2, "fizz", 4, "Buzz", "fizz"]

[1, 2, "fizz", 4, "Buzz", "fizz", 7]

[1, 2, "fizz", 4, "Buzz", "fizz", 7, 8]

[1, 2, "fizz", 4, "Buzz", "fizz", 7, 8, "fizz"]

[1, 2, "fizz", 4, "Buzz", "fizz", 7, 8, "fizz", "Buzz"]

[1, 2, "fizz", 4, "Buzz", "fizz", 7, 8, "fizz", "Buzz", 11]

[1, 2, "fizz", 4, "Buzz", "fizz", 7, 8, "fizz", "Buzz", 11, "fizz"]

[1, 2, "fizz", 4, "Buzz", "fizz", 7, 8, "fizz", "Buzz", 11, "fizz", 13]

[1, 2, "fizz", 4, "Buzz", "fizz", 7, 8, "fizz", "Buzz", 11, "fizz", 13, 14]

[1, 2, "fizz", 4, "Buzz", "fizz", 7, 8, "fizz", "Buzz", 11, "fizz", 13, 14, "fizzBuzz"]
