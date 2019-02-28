console.log("-------------1--------------");
// Easy Going ..Exercise 1
for (var i =1 ; i<=20 ;i++)
{
    console.log(i)
}
console.log("-------------2--------------");

//Get Even .. Exercise 2 
 for (var x =0 ; x<=200 ; x++)
 {
     if (x %2 ===0 )
     console.log(x)
 }
 console.log("-------------3--------------");

 // Wild Wild Life ..Exercise 3
 const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// change wolfy home
wolfy.pop(); // remove yukon Territory
wolfy.push("Gotham City "); // add element 

//second hometown for Dart
dart.push("left right ");
console.log(dart);
// change wolfy name 
wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);


console.log("-------------4--------------");

//Yell at the Ninja Turtles ..Exercise 4
var ninjaTurtles =["Donatello"," Leonardo ", "Raphael", "Michelangelo"];
for (let n of ninjaTurtles) {
    {
        console.log(ninjaTurtles.toUpperCase(n));
    }
    
}
console.log("-------------5--------------");
//Methods, Revisited .. Exercise 5
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//index of 
console.log(favMovies.indexOf("Titanic"));
//use a .sort method 
favMovies.sort(); // sort the element 
favMovies.pop();  // remove the last item .. by use pop method
favMovies.push ("Guardians of the Galaxy"); // add item by push method
favMovies.reverse(); //Revers the array
favMovies.shift(); //remove the first element 
favMovies.unshift("Holidays"); // added to the first array 
favMovies.splice(3,0,"ocean's eleven "); // add the movie to array
console.log(favMovies); // Final result 
console.log(favMovies.indexOf("Fast and Furious")); // the index of "Fast and Furious" we removed is 15 !!!

console.log("-------------6--------------");

//Where is Waldo ..Exercise 6
var whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
                    console.log(whereIsWaldo.splice([0][2],1));
                    console.log(whereIsWaldo.splice([2][2],1));
                    console.log(whereIsWaldo.splice([2][2],0,"No one"));
                 console.log(whereIsWaldo);
                 console.log(whereIsWaldo[whereIsWaldo.length-1]);

console.log("-------------7--------------");
//Excited Kitten .. Exercise 7
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
console.log("-------------8--------------");
//Find the Median ..Exercise 8
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
var median = function(nums) {
    nums = nums.sort();
    if (nums.length % 2 ===0) // array with even number elements
    { 
      return (nums[nums.length/2] + nums[(nums.length / 2) - 1]) / 2;
    }
    else // array with odd number elements
    {
      return nums[(nums.length - 1) / 2]; 
    }
  };
