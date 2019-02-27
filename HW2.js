//Q1
//Write a for loop that will log the numbers 1 through 20.

for ( var i=1 ; i<= 20 ; i++)
{

console.log(i);

}

///////////////////////////////////////////

//Q2
//Write a for loop that will log only the even numbers in 0 through 200.

for ( var i=0 ; i<= 200 ; i++)
{
if (i % 2 == 0)
{

    console.log(i);
}

}
///////////////////////////////////////

//Q3

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


plantee[2]= 5001;
console.log(plantee[2]);

wolfy[3]="Gotham City";
console.log(wolfy[3]);

dart.push("Hawkins");
console.log(dart[4]);

wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy[0]);
///////////////////////////////////////////////////////

//Q4
//Yell at the Ninja Turtles

const ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
var i;
for ( i of ninjaTurtle )
{
i+=1;
console.log(i.toUpperCase());

}


///////////////////////////////////////////


//Q5
//

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle',
'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian',
'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther',
'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf("Titanic"));

favMovies.sort();

for (var x of favMovies)
{
console.log(x);
x+=1;

}
console.log("\n");

favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift("Game of Thrones");
for (var x of favMovies)
{
console.log(x);
x+=1;

}
console.log("\n");
//splice and add
var indexOfDjango = favMovies.indexOf("Django Unchained");
favMovies.splice(indexOfDjango,1);
favMovies.push("Avatar");

for (var x of favMovies)
{
console.log(x);
x+=1;

}
console.log("\n");
//slice array
var halfIndex=(favMovies.length-1)/2;
var slice_favMovies = favMovies.slice(halfIndex,favMovies.length );

for (var x of slice_favMovies)
{
console.log(x);
x+=1;

}
console.log("\n");

//console the array

for (var x of favMovies)
{
console.log(x);
x+=1;

}
console.log("\n");
/////////////////////////////////////////////

//Q6
//Where is Waldo

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

//spice 

whereIsWaldo.splice(1,1);


whereIsWaldo[1][2]="No One";
for (var x of whereIsWaldo)
{
console.log(x)
x++
}

console.log(whereIsWaldo[2][1][1]);
//////////////////////////////////////

//Q7
//Excited Kitten
var meow = 0;
while (meow < 20)
{

console.log("Love me, pet me! HSSSSSS!" );

meow++

}
var kittenTalking = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

while (meow <= 20)
{

    if (meow % 2 == 0)
{

    var randomNum  =(Math.random())*10;

    if (randomNum => 0  && randomNum < kittenTalking.length )
    {

        console.log(kittenTalking[randomNum]);
        meow++
    }
    else
    {

        console.log("hhh" );
    }
   

   
}

break;

}

/////////////////////////////////


//q8
//Find the Median

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort();

var lengthOfarray = nums.length;
if (lengthOfarray %2 == 0 )
{
    console.log((nums[lengthOfarray / 2]  +  nums[lengthOfarray / 2 + 1]) /2  );
}
else

{

console.log( nums[Math.floor(lengthOfarray / 2)]);

}





