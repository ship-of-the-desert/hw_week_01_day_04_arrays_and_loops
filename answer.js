//loop that log the numbers 1 through 20 ...
for ( var number =1 ; number<21 ; number ++ ) {
    console.log(number) ;
}

//for loop that will log only the even numbers in 0 through 200.
for ( var num = 0 ; num <201 ; num++ ) {
    if ( num % 2 === 0) 
    console.log(num) ; }

   //Wild Wild Life ...
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
 
wolfy.pop(); // remove yukon Territory
wolfy.push("Gotham City "); 
dart.push("left right ");
console.log(dart);
wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);    



//Yell at the Ninja Turtles ...
var mNinja = [
  "Donatello", 
  "Leonardo", 
  "Raphael", 
  "Michaelangelo",
];
for (var i = 0; i < mNinja.length; i++) {
    console.log("mNinja"[i])
}

console.log( mNinja.toUpperCase() ) ;


//Methods, Revisited ...
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//index of 
console.log(favMovies.indexOf("Titanic"));
favMovies.sort(); // .sort to sort the element 
favMovies.pop();  //  use .pop method to remove last item 
favMovies.push ("Guardians of the Galaxy"); // .push to add item
favMovies.reverse(); // to Revers array
favMovies.shift(); // .shift to remove first element 
favMovies.unshift("Holidays"); 
favMovies.splice(3,0,"ocean's eleven "); // .splice to add the movie to array
console.log(favMovies); // Final result 
console.log(favMovies.indexOf("Fast and Furious")); 


//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
                    
                    console.log(whereIsWaldo.slice(0,2,"Eggbert") );
                    console.log(whereIsWaldo.indexOf("Woldo"));

//Excited Kitten
var count =1;
for (var count =1 ; count<=20 ;count ++ );
{
    console.log("Love me, pet me! HSSSSSS!");
    if (count % 2 ===0 )
    {
       var kittenTalking=["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."];
       var talk= Math.random *10 ;
       console.log(kittenTalking[talk]);
    }
}


 
//Find the median
var num = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
if (num.length % 2) {
    return num[half];
  } else {
    return (num[half] + num[half] + 1) / 2.0;
  }


function calcMedian() {
  
  var half = Math.floor(num.length / 2);
  num.sort(function(a, b) { return a - b;});

  
}
console.log(num);
console.log(num.length);
console.log(calcMedian());
console.log(num);