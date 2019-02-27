const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
                
                    whereIsWaldo.splice(1,1);
                    whereIsWaldo[1][2] = "No One"; // use 1 becus deleet "Eggbert"
                    console.log(whereIsWaldo);
                    console.log(whereIsWaldo[2][1][1]);
// don done  