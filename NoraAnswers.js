
// loop logs from numbers 1 to 20 

for (let index = 1; index < 21; index++) {
    console.log(index);
}
//loop that will log only the even numbers in 0 through 200.
for (let index = 0; index <= 200; index += 2) {
    console.log(index);
}


const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// changing the values of elements 
plantee[2] = plantee[2] - 1;
wolfy[3] = "Gotham City";
dart[3] = [dart[3], "Hawkins"];
wolfy[1] = "Gameboy";

//for of to itrate on each object in the array and print out 
var ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const i of ninjaTurtles) {
    console.log(i.toUpperCase());
}