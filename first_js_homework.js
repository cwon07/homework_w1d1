/* Section 1
1. The acronym DRY stands for "Don't Repeat Yourself." It aims to reduce repetition of information,
so that it's easy to make changes when necessary.
Some tools used to avoid writing repetitive codes are loop, function, descriptive varinable names.
2. const is used for values that will not change;
let is used for variables that are only available inside the block where they're defined, whereas
var is used for variables throughout the entire function in which they're declared. */

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
let g = 0;
g = b + c;

console.log(a<b)

/* Section 2
I used 'let' because g needed to be assigned with more than one value. 
If you use 'var', it would stay the same in this case. 
However, using 'const' will give us a TypeError message because const values cannot have more than one value.
Writing 10 = g will result in a SyntaxError: invalid left-hand side in assignment because 
10 was not previously assigned with either let, var, or const.
*/




/* Section 3
The code is an infinite loop because there's no exit clause to stop it from running.*/

