

for( var i = 1; i  < 21 ; i++){
    console.log(i);
}
    

for ( var i =1; i<200;i++){


    if (i%2==0){

console.log(" even  > "+i)
    }
}

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001;

wolfy[3] = "Gotham City";
wolfy.unshift("Wolfy")
wolfy.shift("Gameboy") ;

dart[4] = "Hawkins";
 console.log(plantee);
 console.log(wolfy);
 console.log(dart);



 var ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let value of ninjaTurtles) {
  
  console.log(value.toUpperCase());


}






 

let favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 
'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian',
 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven',
 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


 console.log(favMovies.indexOf("Titanic"));
 favMovies.sort();
 favMovies.pop();
 favMovies.push("Guardians of the Galaxy");
 favMovies.reverse();
 favMovies.shift("Jaws");
 favMovies.unshift("Jaws");
 favMovies.splice(3,1);
 favMovies.push("Avtar");
 
 var varibleSlice=favMovies.slice(7,7);
 console.log(varibleSlice);

 console.log(favMovies);
 console.log(favMovies.indexOf("Fast and Furious"));
 




 const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

  var testSlice=  whereIsWaldo .slice("Eggbert");

 console.log(testSlice)
 whereIsWaldo[2] = "No One";

 console.log(whereIsWaldo);