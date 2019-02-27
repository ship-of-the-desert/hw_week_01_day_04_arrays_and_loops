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

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
console.log(favMovies);
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift("beautiful mind");
favMovies.splice(favMovies.indexOf("Django Unchained"), 1,"Avatar");
console.log(favMovies);
var newF=favMovies.slice(favMovies.length/2);
console.log(` new Faf ${newF}`);
console.log(favMovies.indexOf("Fast and Furious"));


//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
                    console.log(whereIsWaldo);
                    console.log(whereIsWaldo.indexOf("Eggbert"));
                    whereIsWaldo.splice(whereIsWaldo[1],1);
                    console.log(whereIsWaldo);
                   console.log(whereIsWaldo.indexOf("Waldo"));//[3][1][1]);
                  

//Excited Kitten
var kittenTalkingPoints=["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."];
var random=Math.random();
for (i=0;i<=20;i++){
  console.log("Love me, pet me! HSSSSSS!");

}                   
//Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
console.log(nums);
console.log(nums[Math.floor((nums.length)/2)]);