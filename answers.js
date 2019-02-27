//Name: Khuzam Shubbar

//Easy going
/* for loop prints 1 through 20
*/
console.log('Easy Going-------------');
for (var i = 1; i <= 20; i++) {
    console.log(i);
}
console.log('\n');

//Get even
/* for loop prints even #s (0-200)
*/
console.log('Get even-------------');
for (var i = 0; i <=200; i+=2) {
    console.log(i);
}
console.log('\n');

//wild wild life
console.log('Wild Wild Life-------------');
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

//1. changing plantee's age
plantee[2]= plantee[2] + 1;
console.log(plantee);

//2. changing wolfy's hometown
wolfy[3]= 'Gotham City';
console.log(wolfy);

//3. giving dart 2nd hometown
dart.push('Hawkins');
console.log(dart);

//4. renaming wolfy
wolfy.shift();
wolfy.unshift('Gameboy');
console.log(wolfy);
console.log('\n');

//Yell at the ninja turtles
console.log('Yell At The Ninja Turtles-------------');

var ninjaTurtles= ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

/*for of to iterate through ninjaTurtles
    prints the name capitalized
*/
for (turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase());
}



