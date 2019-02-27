// #1 Easy Going
//Write a for loop that will log the numbers 1 through 20.
// //for ( var i = 1; i <= 20 ; i++ )
// //{
// //console.log(i)
// //}

// #2 Get Even 
//Write a for loop that will log only the even numbers in 0 through 200.
// for  (i = 0 ; i<= 200; i +=2)
// {
// console.log(i);
// }

// #3 Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant",  5000 , "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// // Step#1; 
// plantee[2] += 1;
// // Step#2: 
// wolfy[3] = 'Gotham City';
// // Step#3: 
// dart.push('Hawkins');
// // Step#4: 
// wolfy.splice(1,1);
// wolfy.unshift('Gameboy');

// // Print arrays
// console.log(wolfy);
// console.log(sharky);
// console.log(plantee);
// console.log(porgee);
// console.log(dart); 

//#4 Yell at the Ninja Turtles
// var ninjaTurtles = ["Donatello" , "Leonardo" , "Raphael", "Michaelangelo" ];
// for ( const i of  ninjaTurtles ) 
// {
//    console.log(i.toUpperCase());
// }

// #5 Methods, Revisited
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies.indexOf("Titanic"));
// favMovies.sort();
// favMovies.pop();
// favMovies.push("Guardians of the Galaxy");
// favMovies.reverse();
// favMovies.shift();
// favMovies.unshift();
// favMovies.splice(favMovies.indexOf("Reverse the array") , 1);
// favMovies.push("Avatar");
// var halOfMyFav = favMovies.slice (( favMovies.length - 1 )/ 2);

// console.log(halOfMyFav.toString());
// console.log (favMovies.toString());
// console.log (favMovies.indexOf("Fast and Furious"));

// #6 Where is Waldo
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// // Remove 'Eggbert' 
// whereIsWaldo.splice (1,1) ;
// //replace 'Neff' to 'No One' 
// whereIsWaldo[1][2] = "No One" ; 
// // access and console.lg "Waldo"
// console.log(whereIsWaldo[2][1][1]);

// #7 Excited Kitten 
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.\
   for (var i =0; i < 20 ; i++ ){
       console.log("Love me, pet me! HSSSSSS!");
   }
//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
    var kittyTalk = [ '...human...why you taking pictures of me?...',
    '...the catnip made me do it...', 
     "...why does the red dot always get away..." ];
    for ( var i  = 0 ; i <20 ; i++){
        let meow = Math.floor(Math.random()*3);
        console.log("Love me, pet me! HSSSSSS!" + kittyTalk[meow]);
    }

