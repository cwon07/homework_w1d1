/* Section 1
1. The acronym DRY stands for "Don't Repeat Yourself." It aims to reduce repetition of information,
so that it's easy to make changes when necessary.
Some tools used to avoid writing repetitive codes are loop, function, descriptive varinable names.
2. const is used for values that will not change;
let is used for variables that are only available inside the block where they're defined, whereas
var is used for variables throughout the entire function in which they're declared. */


/* Section 2

a < b
c > d
'Name' == 'Name'
a < b < c
a == a < d 
a == a !== d 
e !== 'Kevin'
48 !== '48'
f !== e 
g == 110 

I used 'let' because g needed to be assigned with more than one value. 
If you use 'var', it would stay the same in this case. 
However, using 'const' will give us a TypeError message because const values cannot have more than one value.
Writing 10 = g will result in a SyntaxError: invalid left-hand side in assignment because 
10 was not previously assigned with either let, var, or const.

Bonus Challenge:
a _ (b || f) _ !f && e _ c 
console.log(a < (b || f) === !f && e !== c)
*/

/* Section 3
The code is an infinite loop because there's no exit clause to stop it from running.
The second code will give an error because the value of runProgram is set as constant, 
therefore when there's another value introduced after console.log it negates the first value so it's not going to run.

let letters = "A";
// start a while loop that will run where letters is defined as "A", 
let i = 0;
while (i < 20) {
    // loop will run as long as i is less than 20
	letters += "A";
    // letters is increased by the value of "A"
	i++;
    // increments the value of i by 1 and closes the while loop;
   // the loop will continue to run until the while condition becomes false

}

console.log(letters);
// print the value of letters */

/*Expected result: print A 20 times 
Actual result: printed A 21 times. 
I'm guessing the reason why it printed 21 As is because by default 
it will always print one A in the beginning regardless of 'i'.
*/


/*Section 4

The key differences between for loops and while loops is that 
for loop is used for definite loops when the number of iteration is known, 
whereas while loops are used for indefinite loops, and they run until 
condition of the statement in the program becomes false.
For loop is useful when you know the exact number of times the loop has to be
repeated, where as while loop is used when the number of iteration is unknown.


The first part of the control panel is: i =0 (initialization)
The second part of the control panel is: i < 100 (condition)
The third part of the control panel is: i++ (increment)

Backlash \ is used to start an escape sequence, whereas forward slash /
is used in place of "or". */

/*for (let i = 999; i >= 0; i--){
    console.log(i)
} */

/*for (let i = 1; i <= 10; i++){
    console.log("The value of i is: " + (i) + " of 10")
} */

/*for (let i = 1; i <= 10; i++){
    console.log(`The value of i is: ${i} of 10`)
} */

// ITERATION

/*const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i++){
    console.log(StarWars[i])
} */

/*const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

StarWars.forEach((value, index) => {
    console.log(value, index)
}) */

/* Bonus Challenge
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i <5; i++){
    if (i % 2 === 0) console.log(StarWars[i])
} */
