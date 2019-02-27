//Easy Going
//This for loop will start with number 1 and prints the number until it reaches number 20
for (var number = 1; number <= 20;number++)
 {
     console.log(number);
 }

 //Get Even
 //the first for loop will 
 for (var number = 0; number <= 200; number++)
 {
     if(number%2 == 0){
        console.log(number);
     }
 }

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

//Create an array that adds 1 for each age in another array

//simple update 
plantee[2] = 5001;

//I've tried .from and .map didn't work
//const plateeYearOlder = plantee.from(plantee.findIndex[2], age => age+1);
// const yearOlder = plantee.map((plantee.indexOf value, [2], array) => {
//     return value +1;});
 
wolfy[3] = "Gotham City";
//dart[3]= "Hawkins";
wolfy[0]="Gameboy";


//Yell at the Ninja Turtles
const ninjaTurtlesArray= ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for(var i = 0; i < ninjaTurtlesArray.length; i++){
    return ninjaTurtlesArray.toUpperCase();
}
console.log(ninjaTurtlesArray);