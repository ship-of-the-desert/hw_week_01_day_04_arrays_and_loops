// Q1 Easy Going
// Write a for loop that will log the numbers 1 through 20.

for(var i = 1; i <= 20; i++){
    console.log(i);
}



// Q2 Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

for(var i = 0; i <= 200; i+=2){
    console.log(i);
}



// Q3 Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = plantee[2]+1;

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
//Give D'Art a second hometown by adding "Hawkins"
dart.push('Hawkins');
//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift();
wolfy.unshift('Gameboy');



