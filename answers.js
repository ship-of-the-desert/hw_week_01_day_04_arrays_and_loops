// Easy Going
for (var i=1;i<21; i++) {
    console.log(i)
}


// Get Even
for (var i=0; i<21; i++) {
    (i%2===0)?console.log(i):0;
}


// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]+=1
wolfy[3]='Gotham City'
dart[3]+=', Hawkins'
wolfy[0]='Gameboy'


// Yell at Ninja Turtles
var ninjaTurtles=['Donatello, Leonardo, Raphael, Michaelangelo'];

for (let n of ninjaTurtles) {
    console.log(n.toUpperCase())
}
