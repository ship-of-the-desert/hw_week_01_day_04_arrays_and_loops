//Name: Khuzam Shubbar

//Easy going
/* for loop prints 1 through 20
*/
console.log('Easy Going-------------');
for (var i = 1; i <= 20; i++) {
    console.log(i);
}
console.log('\n');

//Get even
/* for loop prints even #s (0-200)
*/
console.log('Get even-------------');
for (var i = 0; i <=200; i+=2) {
    console.log(i);
}
console.log('\n');

//wild wild life
console.log('Wild Wild Life-------------');
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

//1. changing plantee's age
plantee[2]= plantee[2] + 1;
console.log(plantee);

//2. changing wolfy's hometown
wolfy[3]= 'Gotham City';
console.log(wolfy);

//3. giving dart 2nd hometown
dart.push('Hawkins');
console.log(dart);

//4. renaming wolfy
wolfy.shift();
wolfy.unshift('Gameboy');
console.log(wolfy);
console.log('\n');

//Yell at the ninja turtles
console.log('Yell At The Ninja Turtles-------------');

var ninjaTurtles= ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

/*for of to iterate through ninjaTurtles
    prints the name capitalized
*/
for (turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase());
}
console.log('\n');

//methods
console.log('Methods-------------');
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 
'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log('Index of Titanic: ' + favMovies.indexOf('Titanic'));
console.log('\n');

favMovies.sort(); //sort: rearranges (alters) array alphabetically
console.log('Result after sorting:');
console.log(favMovies); 
console.log('\n');

favMovies.pop();
favMovies.push('Guardians of the Galaxy');
console.log('Result after poping und pushing:');
console.log(favMovies);
console.log('\n');

favMovies.reverse();
console.log('Result after reversing:');
console.log(favMovies);
console.log('\n');

favMovies.shift();
favMovies.unshift(); //does nothing without a parameter
console.log('Result after shifting/unshifting:');
console.log(favMovies);
console.log('\n');

favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar');
console.log('Result after splicing:');
console.log(favMovies);
console.log('\n');

console.log('Result of slicing:');
var sliceResult= favMovies.slice(0,favMovies.length/2);
console.log(sliceResult);
console.log('\n');
//slicing does not permanently alter the array so i'm not printing it now
console.log('index of fast: '+sliceResult.indexOf('Fast and Furious')); //returns -1 'doesnt exist'

console.log('Final array:');
console.log(favMovies);
console.log('\n');

//Where is waldo
console.log('Where is Waldo-------------');
const whereIsWaldo = [
    ["Timmy", "Frank"], "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
];

//removing eggbert
whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'), 1);
console.log('Result after splicing:');
console.log(whereIsWaldo);
console.log('\n');

//changing 'neff'
whereIsWaldo[1][2]= 'No One';
console.log('Result after changing:');
console.log(whereIsWaldo);
console.log('\n');

//accessing waldo
console.log(whereIsWaldo[2][1][1]);
console.log('\n');

//excited kitten
console.log('Excited Kitten-------------');

/* logs "love me..." x 20 times
*/
for (var i= 0; i < 20; i++) {
    console.log((i+1) + ': ' + 'Love me, pet me! HSSSSSS!');  
}
console.log('\n');

var kittenTalking= ['...human...why you taking pictures of me?...',
    '...the catnip made me do it...', '...why does the red dot always get away...'];
/* loop through even numbers
    prints a random message from kittenTalking
*/
for (var i= 0; i <= 20; i+=2) {
    var result= Math.floor(Math.random() * kittenTalking.length);
    console.log(kittenTalking[result]);  
}
console.log('\n');




