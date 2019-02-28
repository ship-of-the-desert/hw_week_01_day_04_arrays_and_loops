
 const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

  var testSlice=  whereIsWaldo .slice("Eggbert");

 console.log(testSlice)
 whereIsWaldo[2] = "No One";

 console.log(whereIsWaldo);