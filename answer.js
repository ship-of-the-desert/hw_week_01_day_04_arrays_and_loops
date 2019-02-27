//Easy Going
for (i=0;i<=20;i++){
  console.log(i);
}
 //......................
// Get Even
for (i=0;i<=200;i++){
  if (i%2==0){
  console.log(i);
    }
    }
    //......................

  // Wild Wild Life  
  const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
  const sharky = ["Sharky", "shark", 20, "Left Coast"]
  const plantee = ["Plantee", "plant",  5000 , "Mordor"]
  const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
  const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

  plantee[2]=5001;
  wolfy[3]="Gotham City";
  dart[3]=dart[3]+" and Gotham City";
  wolfy.shift();
  wolfy.unshift("Gameboy");
  
  console.log(wolfy);
  console.log(sharky);
  console.log(plantee);
  console.log(porgee);
  console.log(dart);

//Yell at the Ninja Turtles
var ninjaTurtles=["Donatello", "Leonardo", "Raphael","Michaelangelo"];
for(let ninja of ninjaTurtles){
  console.log(`${ninja.toLocaleUpperCase()}`);
}


