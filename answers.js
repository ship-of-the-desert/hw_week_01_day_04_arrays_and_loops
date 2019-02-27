// // Easy Going
// for (var i = 1; i < 21; i++){
//     console.log(i);
    
// }

// // Get Even
// for (var i = 0; i < 201; i +=2){
//     console.log(i);
    
// }

// Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 5001;
// wolfy[3] = "Gotham City";
// dart.push("Hawkins");
// wolfy.shift(0);
// wolfy.unshift("GameBoy");


// console.log(wolfy)
// console.log(sharky)
// console.log(plantee)
// console.log(porgee)
// console.log(dart)

// Yell at the Ninja Turtles 

// var animalHeroes = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]



// for (let char of animalHeroes){
//     console.log(char.toUpperCase())
// }

// Methods, Revisited 

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf('Titanic'));
// favMovies.sort();
// favMovies.pop();
// favMovies.push('Guardians of the Galaxy');
// favMovies.reverse();
// favMovies.shift();
// favMovies.unshift("Captin Marvel");
// console.log(favMovies.indexOf('Django Unchained'));
// favMovies.splice(15,1, 'Avatar');
// console.log(favMovies.slice(0,favMovies.length/2))
// var slicedList = favMovies.slice(0,favMovies.length/2)
// console.log(slicedList);
// console.log(slicedList.indexOf('Fast and Furious'));


// Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
//     whereIsWaldo.splice(1,1)
//     console.log(whereIsWaldo);
//     var nestedArray = whereIsWaldo[1]
//     nestedArray.splice(2,1,"No one");
//     console.log(nestedArray);
//     console.log(whereIsWaldo[2][1][1]);

// Excited Kitten
// for (i=1; i < 21; i++){
//     console.log("Love me, pet me! HSSSSSS!" );
    
// }

// var talkingCat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."]

// for ( i = 0; i < 20; i++) {
//     if (i % 2 === 0){
        
//         console.log(talkingCat[Math.random() * talkingCat.length | 0])

//     } else {
//         console.log("Love me, pet me! HSSSSSS!" );
// }
// }

// Median 
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
            nums.sort();
            console.log(nums[Math.ceil(nums.length/2)])
