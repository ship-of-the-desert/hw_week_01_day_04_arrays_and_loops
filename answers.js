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

 //simple update 
plantee[2] = '5001';
wolfy[3] = "Gotham City";
dart.push ("Hawkins");
wolfy[0]= "Gameboy";


//Yell at the Ninja Turtles
// (var i = 0; i < ninjaTurtlesArray.length; i++)
const ninjaTurtlesArray= ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for(ninjaTurtlesArray of ninjaTurtlesArray){
    return ninjaTurtlesArray.toUpperCase();
}

console.log(ninjaTurtlesArray);

// Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring',
 'Howl\'s Moving Castle', 'Django Unchained', 
 'Cloud Atlas', 'The Usual Suspects', 
 'Toy Story', 'Conan the Barbarian',
  'Titanic', 'Harry Potter', 'Fried Green Tomatoes',
   'Volver', 'Oculus', 'Seven', 'Black Panther', 
   'Harry Potter', 'Imitation of Life', 'Snatch',
    'Fast and Furious'];
  console.log(favMovies.indexOf("Titanic"));
  console.log(favMovies.sort()+"I have included sort the favorite movies in ascending order" );
  console.log(favMovies.pop()+"I have included pop method to remove the last item of an array and return that item");
  console.log(favMovies.push("Guardians of the Galaxy"));
  console.log(favMovies.reverse());
  console.log(favMovies.shift());
  console.log(favMovies.unshift("The incredibles")+"I have included unshifted to add new items to the beginning of an array");
  console.log(favMovies.splice(favMovies.indexOf("Django Unchained"),1,"Avatar")+"splice method will alter the array");
  var halfArray = favMovies.slice (favMovies.length / 2, favMovies.length);
  console.log(halfArray);
  console.log(favMovies());
  console.log(halfArray.indexOf("Fast and Furious"));

  // Where is Waldo
  const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"));
whereIsWaldo[2][2]= "No One";
console.log(whereIsWaldo[3][1][2]);

// Excited Kitten
for (var i = 0; i <= 4;i++)
 {
     console.log('Love me, pet me! HSSSSSS!');
     if (i % 2 == 0)
     {
         console.log(' ...human...why you taking pictures of me?...')
     }
     else
     {
         console.log('..the catnip made me do it...', '...why does the red dot always get away...');
     }
  }
 kittyTalk=['Love me, pet me! HSSSSSS!',' ...human...why you taking pictures of me?...','..the catnip made me do it...', '...why does the red dot always get away...'];
 var random = Math.floor(Math.random * kittyTalk.length);
console.log(random [kittyTalk]);

//Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
var median = Math.floor(nums.length-1 / 2);
var median1 = Math.ceil(nums.length-1 / 2);
var result = num([median]+[median1])/2;
console.log(result);
