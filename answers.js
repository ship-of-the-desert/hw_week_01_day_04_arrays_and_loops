//HW WEEK 01 Day 04

/*Easy Going
Write a for loop that will log the numbers 1 through 20.*/

console.log('First loop')
for (var index = 1; index < 21; index++) {
    console.log(index);
}


/*Get Even
Write a for loop that will log only the even numbers in 0 through 200.
Hint: Think about the increment expression.*/

console.log('Seconde loop')
for (let index = 0; index < 201; index+=2) {
    console.log(index)
}


/*Fizz Buzz
This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

Write a javascript application that logs all numbers from 1 - 100.

If a number is divisible by 3 log "Fizz" instead of the number.

If a number is divisible by 5 log "Buzz" instead of the number.

If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.*/

console.log('Third loop')
for (let index = 1; index <= 100; index++) {
    if(index % 3 == 0){
        console.log(index+" Fizz")
    }
    if(index % 5 == 0){
        console.log(index+" Buzz")
    }
    if(index % 3 == 0 && index % 5 == 0){
        console.log(index+" Fizzbuzz")
    }
}



/*Wild Wild Life
Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
 
*/

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]=5001

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3]="Gotham City"

//Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins")

/*Porgee decides that Wolfy can't be named "Wolfy" anymore. 
Remove "Wolfy" from the wolfy array and replace it with "Gameboy".*/
wolfy.shift();
wolfy.unshift("Gameboy")
console.log(wolfy)



/*Yell at the Ninja Turtles
Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them 
and print out the result.
*/

ninjaTurtles =["Donatello","Leonardo","Raphael","Michaelangelo"]
for (var index = 0; index < ninjaTurtles.length; index++) {
  console.log(ninjaTurtles[index].toUpperCase())
}


//array of favorite movies
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic
console.log(favMovies.indexOf("Titanic"))

//sorting the array (A to Z)
favMovies.sort()
console.log(favMovies)

//pop method
favMovies.pop()

//push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")

//Reverse the array
favMovies.reverse()

//Use the shift method
favMovies.shift()

favMovies.unshift("Heaven")

//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained",
//instead of counting it yourself) Thought question: did this permanently alter our array?

favMovies.splice(favMovies.indexOf("Django Unchained"),1,"Avatar")


//slice the last half of the array

var slice = favMovies.slice(favMovies.length/2)
console.log(favMovies)
console.log(slice)


//console.log the index of "Fast and Furious"
console.log(favMovies.indexOf("Fast and Furious")) 




const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//Remove Eggbert
whereIsWaldo.splice(1,1)
console.log(whereIsWaldo)

//Change "Neff" to "No One"
whereIsWaldo[1][2]="No One"
console.log(whereIsWaldo)

//Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1])