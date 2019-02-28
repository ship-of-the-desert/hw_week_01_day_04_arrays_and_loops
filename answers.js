/*for (var turnNumber = 0 ; turnNumber < 21 ; turnNumber++){
    console.log(turnNumber);
    
}
for ( var evenNu = 0 ; evenNu < 200 ; evenNu++ ){
if (evenNu % 2 == 0) console.log ("its even num" + evenNu);
}

    /*
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
    
   var wolfy = {
       type:"Wolfy",
        name:"wolf", 
        age:16, 
        homeTown:"Yukon Territory"


    };

var sharky = {
    type:"Sharky", 
    name:"shark", 
    age: 20, 
    homeTown:"Left Coast"
};
const plantee = {
    type:"Plantee", 
    name:"plant",  
    age:2019-1992 + " years old" , 
    homeTown:"Mordor"
};

const porgee = ["Porgee", "Porg", 186, "Ahch-To"];

const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];



console.log(wolfy,sharky, plantee, porgee, dart);
// i tried too manyways to use pop() and push() and wolfy.splice()but didn't work out.

console.log("Yell At the ninja");
var ninjaMembers = [ Donatello, Leonardo, Raphael, Michaelangelo];
for (var x of ninjaMembers) {
    console.log(x.toUpperCase());
}

*/

//console.log("revisted");

/* const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.shift();
favMovies.reverse();
favMovies.unshift("New element");
//favMovies.splice([1],[13]);
favMovies.slice(-1 , -3);  // this is how i did ,but it did not work //
console.log(favMovies);
*/

const whereIsWaldo = [
                        ["Timmy", "Frank"], 
                        "Eggbert",
                        ["Lucinda", "Jacc", "Neff", "Snoop"],
                        ["Petunia", ["Baked Goods", "Waldo"]]
                    ];
whereIsWaldo.splice(1,1);
whereIsWaldo[1][2]="no One";

console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);


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


