//easy going exercise 
var number = [0,1,2,3,4,5,6,7,8,9,10,];

    for (var i = 0; i < number.length; i++) {
        console.log(number[i]);
    }

    //Get Even between 0 to 200
    var numberEven = [];
for (numberEven = 0;numberEven <= 200; numberEven++ ) {
    if (numberEven% 2 == 0){
        console.log(' the even number is: ' + numberEven);}}

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//change Plantee's array to reflect her being a year older
console.log(plantee[2]=5001);
//Change Wolfy's hometown from "Yukon Territory" to "Gotham City"
console.log(wolfy[3]="Gotham City");
//adding second hometown "Hawkins" to porgee
console.log(porgee.push("Hawkins"));
console.log(porgee);
//replace wolfy name with gameboy
console.log(wolfy.splice(0, 1,"Gameboy"));
console.log(wolfy);

//Ninja Turtles 
const ninjaMembers = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (const member of ninjaMembers) {
	console.log(member.toUpperCase());
}
