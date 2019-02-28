const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] += 1; // Change Plantee age
wolfy[3] = 'Gotham City'; // Change wolfy hometome
dart.push('Hawkins'); //Give dart a second hometown 'Hawkins'
wolfy.splice(1, 1); // Remove walfy and add Gameboy
wolfy.unshift('Gameboy');

// Print arrays
console.log(wolfy);
console.log(sharky);
console.log(plantee);
console.log(porgee);
console.log(dart);

