/*
 * Filename: c:\Users\mort8k\Documents\Courses\wdi4\ship_of_the_desert\week01\hw_week_01_day_04_arrays_and_loops\hw_week_01_day_04_arrays_and_loops.js
 * Path: c:\Users\mort8k\Documents\Courses\wdi4\ship_of_the_desert\week01\hw_week_01_day_04_arrays_and_loops
 * Created Date: Wednesday, February 27th 2019, 2:11:18 pm
 * Author: Mortaja Alqassab <moqassa@gmail.com>
 * 
 * Copyright (c) 2019 MiSK Academy
 */


//*SECTION#1 EASY GOING
//?commit message : "Easy Going Answered"
for (var i = 1; i < 21; i++) {
    console.log(i);
}


//*SECTION#2 GET EVEN
//?commit message : "Get Even Answered"
for (var i = 0; i < 201; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


//*SECTION#3 FIZZ BUZZ
//?commit message : "Fizz Buzz Answered"
for (var i = 1; i < 101; i++) {
    var result = '';

    if (i % 3 == 0) {
        result += 'Fizz';
    }
    if (i % 5 == 0) {
        result += 'Fuzz';
    }
    console.log(i + '   ' + result);
}


//*SECTION#4 WILD WILD LIFE
//?commit message : "Wild Wild Life Answered"
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// Step#1; Change Plantee age
plantee[2] += 1;
// Step#2: Change wolfy hometome
wolfy[3] = 'Gotham City';
// Step#3: Give dart a second hometown 'Hawkins'
dart.push('Hawkins');
// Step#4: Remove walfy and add Gameboy
wolfy.splice(1, 1);
wolfy.unshift('Gameboy');

// Print arrays
console.log(wolfy);
console.log(sharky);
console.log(plantee);
console.log(porgee);
console.log(dart);


//*SECTION#5 YELL AT THE NINJA TURTLES
//?commit messsage: "Yell at the Ninja Turtles answered"
var turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (var turtle of turtles) {
    console.log(turtle.toUpperCase());
}


//*SECTION#6 METHODS, REVISITED
//?commit message : ""
const favMovies = ['Jaws',
    'The Fellowship of the Ring',
    'Howl\'s Moving Castle',
    'Django Unchained',
    'Cloud Atlas',
    'The Usual Suspects',
    'Toy Story',
    'Conan the Barbarian',
    'Titanic',
    'Harry Potter',
    'Fried Green Tomatoes',
    'Volver', 'Oculus',
    'Seven',
    'Black Panther',
    'Harry Potter',
    'Imitation of Life',
    'Snatch',
    'Fast and Furious'
];

// Print Titanic index
console.log(favMovies.indexOf('Titanic'));
// Sort the items in the list
favMovies.sort();
console.log(favMovies);
// Pop the last element in the list
favMovies.pop();
// Push a new element to the end of the list
favMovies.push('Guardians of the Galaxy');
// Reverse the array
favMovies.reverse();
// Remove the first element 
favMovies.shift();
// Use unshift with an empty parameter and 
// check for return value
console.log(favMovies.unshift());
// Use splice 
var idx = favMovies.indexOf('Django Unchained');
favMovies.splice(idx, 1, 'Avatar');
// Use slice
console.log(favMovies.slice(2, 4));

// Print final array
console.log(favMovies);


//* SECTION 7 WHERE IS WALDO
//?commit message : ""
const whereIsWaldo = [
    ["Timmy", "Frank"], "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
];
// Remove 'Eggbert' and replace 'Neff' to 'No One' 
whereIsWaldo.splice(1, 1);
whereIsWaldo[1][2] = 'No One';
console.log(whereIsWaldo[2][1][1]);
console.log(whereIsWaldo);


//* SECTION 8 EXCITED KITTENS
//?commit message : "Excited Kittens answered"
// Print 'Love me, pet me! HSSSSSS!'
for (var i = 0; i < 21; i++) {
    console.log('Love me, pet me! HSSSSSS!');
}

var kittenTalk = ['...human...why you taking picture of me?...',
    '...the catnip made me do it...',
    '...why does the red dot always get away...'
];

var meow = Math.floor(Math.random() * 3);
console.log(kittenTalk[meow]);

//* SECTION 9 FIND THE MEDIAN
//?commit message "Find the Median Answered"
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14,
    19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12
];

nums.sort();
if (nums.length % 2 != 0) {
    console.log('Even Count');
    num1 = nums[parseInt(nums.length / 2)];
    num2 = nums[parseInt(nums.length / 2 + 1)];
    console.log((num1 + num2) / 2);
} else {
    console.log('Odd Count');
    console.log(nums[nums.length / 2]);
}


//* SECTION 10 LAB TIME REVISITED
//?commit message : ""

// Create a fibonnacci loop
function fibonnacci(number) {
    if (number === 0) {
        return 0;
    } else if (number === 1 || number === 2) {
        return 1;
    } else {
        return fibonnacci(number - 1) + fibonnacci(number - 2);
    }
}

console.log(fibonnacci(10));


//* SECTION 11 RETURN OF THE CLOSEST
//?commit message : "Kristyn and Thoms have their outfits 
//?ready for class - array practice"
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ],
    [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ],
    [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

var kristynShoe = kristynsCloset.splice(0, 1)[0];
thomsCloset[2].push(kristynShoe);

console.log(kristynsCloset + '\n');
console.log(thomsCloset);

thomsCloset.push(['sneakers', 'slippers', 'boots']);
kristynsCloset.push('nicklace', 'sunglasses', 'jacket');

console.log(`Thom will be wearing ${thomsCloset[0][1]}, 
${thomsCloset[1][1]}, ${thomsCloset[2][1]} and ${thomsCloset[3][1]}\n`);
console.log(`Kristyn will be wearing ${kristynsCloset[0]}, 
${kristynsCloset[1]}, ${kristynsCloset[2]} and ${kristynsCloset[3]}`);