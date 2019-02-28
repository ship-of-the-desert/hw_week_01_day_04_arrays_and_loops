//Easy Going
// for loop that log the numbers 1 through 20
for (i=0;i<=20;i++){
  console.log(i);
}
 //......................

// Get Even
//for loop that  log only the even numbers in 0 through 200.
for (i=0;i<=200;i+=2){
  console.log(i);
    }
//......................

  // Wild Wild Life  
  const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
  const sharky = ["Sharky", "shark", 20, "Left Coast"]
  const plantee = ["Plantee", "plant",  5000 , "Mordor"]
  const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
  const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

  plantee[2]=5001;//change birthday plantee
  wolfy[3]="Gotham City";//Change Wolfy's hometow
  dart[3]=dart[3]+" and Gotham City";//Give D'Art a second hometown 
  wolfy.shift();//Remove "Wolfy" from the wolfy array 
  wolfy.unshift("Gameboy");//Replace it with "Gameboy".
  
  console.log(wolfy);
  console.log(sharky);
  console.log(plantee);
  console.log(porgee);
  console.log(dart);
//......................

//Yell at the Ninja Turtles
// Log arrays element in uppercase using for of loop
var ninjaTurtles=["Donatello", "Leonardo", "Raphael","Michaelangelo"];
for(let ninja of ninjaTurtles){
  console.log(`${ninja.toLocaleUpperCase()}`);
}
//......................

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort();//sort array in descending order
//console.log(favMovies);
favMovies.pop();// delete last element from array
favMovies.push("Guardians of the Galaxy");//add element at the end of array
favMovies.reverse();// reverse order of array's element
favMovies.shift();//delete first element from array
favMovies.unshift("beautiful mind");// add element at the beginning
favMovies.splice(favMovies.indexOf("Django Unchained"), 1,"Avatar");//remove element and and a new element
//console.log(favMovies);
var newfavMovies=favMovies.slice(favMovies.Math.floor(length/2));//create a new array which is the last half of original array 
console.log(` new Faf ${newfavMovies}`);//logs the new array 
console.log(newfavMovies.indexOf("Fast and Furious"));//find index of element in the array  
console.log(newfavMovies.indexOf("Titanic"));//I used a removed element 
//......................

//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
                    //console.log(whereIsWaldo);
                    whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"),1);//delete element
                    //console.log(whereIsWaldo);
                    whereIsWaldo[1][2]="No One";//replace or add new element
                    console.log(whereIsWaldo[2][1][1]);// find element
//......................

//Excited Kitten
var kittenTalkingPoints=["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."];
//var len=kittenTalkingPoints.length;
for (i=0;i<=20;i++){
  console.log("Love me, pet me! HSSSSSS!");
  if(i%2==0){//log if i is even 
    console.log(kittenTalkingPoints[ Math.floor(Math.random()*kittenTalkingPoints.length)]);//logs random element from array
  }

}                   
//......................

//Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();// sort array
console.log(nums);//logs a new sorted array
console.log(nums[Math.floor((nums.length)/2)]);//logs median that appear in the medial of array
//......................