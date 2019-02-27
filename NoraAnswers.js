
// loop logs from numbers 1 to 20 

for (let index = 1; index < 21; index++) {
    console.log(index);
}
//loop that will log only the even numbers in 0 through 200.
for (let index = 0; index <= 200; index += 2) {
    console.log(index);
}


const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// changing the values of elements 
plantee[2] = plantee[2] + 1;
wolfy[3] = "Gotham City";
dart[3] = [dart[3], "Hawkins"];
wolfy[1] = "Gameboy";

//for of to itrate on each object in the array and print out 
var ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const i of ninjaTurtles) {
    console.log(i.toUpperCase());
}

//
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.splice(favMovies.indexOf("Django Unchained"), 1);
favMovies.push("Avatar");
var halfofMyfav = favMovies.slice((favMovies.length - 1) / 2);
console.log(halfofMyfav.toString());
console.log(favMovies.toString());
console.log(favMovies.indexOf("Fast and Furious"));

//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1,1);
whereIsWaldo[1][whereIsWaldo[1].indexOf("Neff")]="No One";

//log the last element in the 3 dimintional array 
console.log(
    whereIsWaldo[whereIsWaldo.length-1]
    [whereIsWaldo[whereIsWaldo.length-1].length-1]
    [whereIsWaldo[whereIsWaldo.length-1][whereIsWaldo[whereIsWaldo.length-1].length-1].length-1]
    );

    var randomResponse = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."]

    //math .random return random number from 0 to 1
    for (let index = 1; index < 21; index++) {
        console.log("Love me, pet me! HSSSSSS!");
        if(index%2==0)
        console.log(randomResponse[Math.floor(Math.random() * 2)]);
    }

//Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
console.log(nums[Math.floor(nums.length/2)]);