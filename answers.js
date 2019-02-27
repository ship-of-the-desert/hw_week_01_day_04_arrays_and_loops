// #1 Easy Going
//Write a for loop that will log the numbers 1 through 20.
// //for ( var i = 1; i <= 20 ; i++ )
// //{
// //console.log(i)
// //}

// #2 Get Even 
//Write a for loop that will log only the even numbers in 0 through 200.
// for  (i = 0 ; i<= 200; i +=2)
// {
// console.log(i);
// }

// #3 Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// Step#1; 
plantee[2] += 1;
// Step#2: 
wolfy[3] = 'Gotham City';
// Step#3: 
dart.push('Hawkins');
// Step#4: 
wolfy.splice(1,1);
wolfy.unshift('Gameboy');

// Print arrays
console.log(wolfy);
console.log(sharky);
console.log(plantee);
console.log(porgee);
console.log(dart); 