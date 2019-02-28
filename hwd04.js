// for (var i = 0; i < 11; i++) {
//     console.log(i)
// }
// console.log("Easy Going answered")
// console.log("---------------------")
// for (var t = 0; t < 21; t++) {
//   if (t % 2 == 0){
//     console.log(t + " is Even number ")
//   }
// }
// console.log("Get Even answered")
// console.log("---------------------")

// //Wild Wild Life
// // var wildLife = [wolfy, sharky, plantee, porgee, dart]
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee [2] = "5001"
// console.log(plantee);
// wolfy[4] = "Gotham City"
// console.log(wolfy);
// dart.push("Hawkins");
// console.log(dart);
// console.log("Wild Wild Life answered")
// console.log("---------------------")

// const ninjas= ["Donatello, Leonardo, Raphael, Michaelangelo"]
// ninjas.toUpperCase();
// for (let ninja of ninjas) {
//     console.log(ninjas.toUpperCase);
// }


// console.log("---------------------")

// //Methods, Revisited
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained',
//  'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic',
// 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
// 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf("Titanic"));
// favMovies.pop();
// favMovies.push("Guardians of the Galaxy")
// favMovies.reverse()
// favMovies.shift()  
// favMovies.unshift("The Fellowship of the Ring");
// //splice
// let favMovies = slice(6, 1);

// console.log(favMovies)

//Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
            
                   
//      whereIsWaldo.splice(3, 1);
//     console.log(whereIsWaldo.splice)
//     whereIsWaldo[5]="No One"



// //Excited Kitten

// for (var i = 0; i < 21; i++) {
//     console.log("Love me, pet me! HSSSSSS!")

//     for (var t = 0; t < 21; t++) {
//          if (t % 2 == 0){
//           console.log(t + " ...human...why you taking pictures of me?... ")
// }
// }
// }

// Find the Median

function median(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
median(nums);
