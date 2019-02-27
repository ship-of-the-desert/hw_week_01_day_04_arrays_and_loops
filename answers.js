//easy going exercise 
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

for (var i = 0; i < number.length; i++) {
    console.log(number[i]);
}

//Get Even between 0 to 200
var numberEven = [];
for (numberEven = 0; numberEven <= 200; numberEven++) {
    if (numberEven % 2 == 0) {
        console.log(' the even number is: ' + numberEven);
    }
}

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]
//change Plantee's array to reflect her being a year older
console.log(plantee[2] = 5001);
//Change Wolfy's hometown from "Yukon Territory" to "Gotham City"
console.log(wolfy[3] = "Gotham City");
//adding second hometown "Hawkins" to porgee
console.log(porgee.push("Hawkins"));
console.log(porgee);
//replace wolfy name with gameboy
console.log(wolfy.splice(0, 1, "Gameboy"));
console.log(wolfy);

//Ninja Turtles 
const ninjaMembers = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (const member of ninjaMembers) {
    console.log(member.toUpperCase());
}

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained',
    'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter',
    'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter',
    'Imitation of Life', 'Snatch', 'Fast and Furious'];
//print the index of titanic
console.log(favMovies.indexOf('Titanic'));
//list of favMovies in alphabetical order
console.log(favMovies.sort());
//removes the last element of an array (volver) after sort it volver is the last elemnt
console.log(favMovies.pop());
//add new element to the end of an array
console.log(favMovies.push("Guardians of the Galaxy"));
//reverses the order of the elements
console.log(favMovies.reverse());
//removes the first item of the Array
console.log(favMovies.shift());
//adds new items to the beginning of an array
console.log(favMovies.unshift());


//remove "Django Unchained" and add "Avatar"
console.log(favMovies.splice(14, 1, "Avatar"));
//console.log(favMovies[14]);

//return half of the elements and slice it 
var theMiddle = favMovies[favMovies.length % 2 | 0];
//console.log(theMiddle.length);
console.log(favMovies.slice(9, 18));
var favMoviesSlice = favMovies.slice(9, 18);
//console.log(favMoviesSlice);
//the final result of favMovies arry
console.log(favMovies);
//the result should be -1 but we sort favMovies arry before the pop method so volver is the last method 
console.log(favMovies.indexOf("Fast and Furious"));
//he result is -1
console.log(favMovies.indexOf("volver"));
//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];
console.log(whereIsWaldo[2].splice(2, 1));
console.log(whereIsWaldo[3][1][1]);

//print  "Love me, pet me! HSSSSSS!" 20 times
for (var i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
}
//print random element in kitty talk
var kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",
    "...why does the red dot always get away..."];
let meow = 0;
var randomkittyTalk = Math.floor(Math.random() * kittyTalk.length);
for (var i = 0; i <= kittyTalk.length; i++) {

    console.log(kittyTalk[randomkittyTalk]);
}



//Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log('array length is '+ nums.length);
//this array is odd , median is the middle number , first sort the array
nums.sort();
//do the math for median
let lowMiddle = Math.floor((nums.length - 1) / 2);
let highMiddle = Math.ceil((nums.length - 1) / 2);
let median = (nums[lowMiddle] + nums[highMiddle]) / 2;

console.log("median :" +median);