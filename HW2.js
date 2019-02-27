//Q1
//Write a for loop that will log the numbers 1 through 20.

for ( var i=1 ; i<= 20 ; i++)
{

console.log(i);

}

///////////////////////////////////////////

//Q2
//Write a for loop that will log only the even numbers in 0 through 200.

for ( var i=0 ; i<= 200 ; i++)
{
if (i % 2 == 0)
{

    console.log(i);
}

}
///////////////////////////////////////

//Q3

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


plantee[2]= 5001;
console.log(plantee[2]);

wolfy[3]="Gotham City";
console.log(wolfy[3]);

dart.push("Hawkins");
console.log(dart[4]);

wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy[0]);
///////////////////////////////////////////////////////

//Q4
//Yell at the Ninja Turtles

const ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
var i;
for ( i of ninjaTurtle )
{
i+=1;
console.log(i.toUpperCase());

}


///////////////////////////////////////////
