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
wolfy.shift()
wolfy.unshift('Gameboy')


// Yell at Ninja Turtles
var ninjaTurtles=['Donatello, Leonardo, Raphael, Michaelangelo'];

for (let n of ninjaTurtles) {
    console.log(n.toUpperCase())
}

// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

favMovies.indexOf('Titanic');
favMovies.sort();
favMovies.pop();
favMovies.push('Guardians of the Galaxy');
favMovies.reverse();
favMovies.shift();
favMovies.unshift('Avatar');
favMovies.splice(favMovies.indexOf('Django Unchained'),favMovies.indexOf('Django Unchained')+1);
var sliced = favMovies.slice(favMovies.length/2,favMovies.length);
console.log(sliced);
console.log(favMovies);
console.log(sliced.indexOf("Fast and Furious"));

// Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1,1);
whereIsWaldo[1][2]="No One";
console.log(whereIsWaldo[2][1][1]);

// Excited Kitten
var catTalk=['...human...why you taking pictures of me?...','...the catnip made me do it...','...why does the red dot always get away...'];
for (i=1;i<21;i++) {
    if (i%2===0) {
        console.log(catTalk[Math.floor(Math.random()*catTalk.length)]);
    }
    console.log("Love me, pet me! HSSSSSS!");
}

// Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort()
console.log(nums[(nums.length/2)-0.5]);