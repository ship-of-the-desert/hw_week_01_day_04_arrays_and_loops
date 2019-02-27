
// // this to print numbers from 1 to 20 
// console.log("print numbers from 0 to 20")
// for(i=1; i<=20; i++){
//     console.log(i)
// }


// // to print an even numbers from 0 to 200
// console.log("print even numbers from 0 to 200")
// for (i=0; i<=200; i++){
//     if (i%2==0)
//     console.log(i)
// }
//____________________________________________________________

// console.log("wild wild life");
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


// plantee[2]=(5000+1);

// wolfy[3]=("Gotham City");
// dart[3]=("Upside Down - Hawkins");
// wolfy.shift();
// wolfy.unshift("Gameboy");
// console.log(wolfy);
// console.log(sharky);
// console.log(plantee);
// console.log(porgee);
// console.log(dart);

// _________________________________________________


// console.log("Ninja Turtles");
// const ninjaTurtles= ["Donatello","Leonardo","Raphael", "Michaelangelo"];

// for (const x of ninjaTurtles){
//     console.log(x.toUpperCase());
// }

// Favorite Movies 
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 
// 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
// 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 
// 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
// 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies);
// console.log(`the index of Titanic Movie is ${favMovies.indexOf("Titanic")}`);

// favMovies.sort();
// favMovies.pop();
// favMovies.push("Guardians of the Galaxy");
// favMovies.reverse();
// favMovies.shift();
// console.log(favMovies.unshift());
// // The unshift() method returns the new array length.
// var indexOfDjango=favMovies.indexOf("Django Unchained");
// favMovies[indexOfDjango]=("Avatar");
// var halfLength=(favMovies.unshift()/2);
// var newMovieList =favMovies.slice(halfLength);
// console.log(newMovieList);
// // trying to indexof item does not exist in the arrays return -1
// console.log(newMovieList.indexOf("Jaws"));







//___________________________________________________





// solving where is waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
           
                    
//                     whereIsWaldo.splice(1,1);
//                     // console.log(whereIsWaldo);
//                    console.log(whereIsWaldo[1][2]);
//                    whereIsWaldo[1][2]=("No One");
//                    console.log(whereIsWaldo);
//                    console.log(whereIsWaldo[2][1][1]);



// calculating the median but the answer return 12 
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,
    19,11,15,17,11,18,12,17,12,71,18,15,12];
    nums.sort();
    var median;
    if (nums.length%2 ===0){
        median = ((nums.length / 2 )- 1) + (nums.length / 2) / 2;
    }
    else{ 
        median = (nums.length - 1)/ 2;

    }
console.log(median);