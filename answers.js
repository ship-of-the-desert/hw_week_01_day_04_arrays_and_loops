// Q1 Easy Going
// Write a for loop that will log the numbers 1 through 20.

for(var i = 1; i <= 20; i++){
    console.log(i);
}



// Q2 Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

for(var i = 0; i <= 200; i+=2){
    console.log(i);
}



// Q3 Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = plantee[2]+1;

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
//Give D'Art a second hometown by adding "Hawkins"
dart.push('Hawkins');
//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift();
wolfy.unshift('Gameboy');



// Q4 Yell at the Ninja Turtles
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
var ninjaTuetlesMembers = ['Donatello','Leonardo','Raphael','Michaelangelo'];
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
for (let member of ninjaTuetlesMembers){
    member = member.toUpperCase();
    console.log(member);
}




// Q5 Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'));
// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort();
console.log(favMovies); // It alphabetically sorts the array
// Use the method pop
console.log(favMovies.pop());
// push "Guardians of the Galaxy"
favMovies.push('Guardians of the Galaxy');
// Reverse the array
favMovies.reverse();
// Use the shift method
favMovies.shift();
// unshift - what does it return?
favMovies.unshift(); // Nothing, I didn't give it a string. otherwise it will add the string to the start of the array
//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
favMovies.splice(favMovies.indexOf('Django Unchained'),1);
favMovies.push('Avatar');
// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
favMovies.slice(favMovies.length/2,favMovies.length-1) // No it doesn't permanently alter our array
// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
var halfFavMovies = favMovies.slice(favMovies.length/2,favMovies.length)
console.log(halfFavMovies); 
// console.log your final results
console.log(favMovies);
console.log(halfFavMovies);
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.includes('Fast and Furious')); // I got true? I don't know why




// Q6   Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1,1);
// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One"
// Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);



//  Q7  Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for(var i=0; i<20; i++){
    console.log("Love me, pet me! HSSSSSS!");
}
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
var kittyTalk = ['...human...why you taking pictures of me?...',
                '...the catnip made me do it...',
                '...why does the red dot always get away...']
for(var i=0; i<20; i++){
    let meow = Math.floor(Math.random()*(3));
    console.log("Love me, pet me! HSSSSSS!"+ kittyTalk[meow]);
}



