var argument1 = parseInt(process.argv[2]);
var argument2 = parseInt(process.argv[3]);

// console.log(argument1);
// console.log(argument2);

// console.log(parseInt(argument2));
// console.log(parseInt(argument2));

// console.log(typeof parseInt(argument1));
// console.log(typeof parseInt(argument2));

// conditional
if (argument1 === argument2) {
  console.log(true);
} else {
  console.log(false);
}

// ternary
console.log(argument1 === argument2 ? true : false);

argument1 === argument2 ? console.log(true) : console.log(false);
