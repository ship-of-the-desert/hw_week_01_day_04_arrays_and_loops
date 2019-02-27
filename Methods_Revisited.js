const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));
console.log(favMovies[favMovies.length-1]); 
favMovies.sort   //Sort by the first character of each element , Did it permanently alter it? no 
console.log(favMovies.pop()) ; //Use the method pop
favMovies.push("Guardians of the Galaxy"); // push "Guardians of the Galaxy"
favMovies.reverse(); // Reverse the array
favMovies.shift(); // deleet the frist one on array 
favMovies.unshift(" the Dark night ") // add to frist one 
favMovies.splice(3,3);
favMovies.push("Avatar")
favMovies.slice(0,7)
console.log(favMovies.indexOf("Fast and Furious"));
//Thought question: that we declared the variable favMovies with const, and yet, 
//we were allowed to change the array. Weird? Should we have used let?
//We should not use Litt unless we wanted it to be not local. 




